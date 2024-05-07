import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  async registerWhithEmailAndPassword( emailAndPassword: any): Promise<any> {
    let registerUser = await this.fireAuth.createUserWithEmailAndPassword(emailAndPassword.email, emailAndPassword.password);
    await this.sendVerificationToEmail();
    return registerUser
  }

  async sendVerificationToEmail():Promise<void> {
    return (await this.fireAuth.currentUser)?.sendEmailVerification();
  }

  async signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(email: string): Promise<any> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  async signOut():Promise<any>{
    return this.fireAuth.signOut()
  }

  async updatePassword(currentPassword: string, newPassword: string): Promise<void> {
    try {
      const user = await this.fireAuth.currentUser;
      if (user) {
        const credential = await this.fireAuth.signInWithEmailAndPassword(user.email!, currentPassword);
        await credential.user?.updatePassword(newPassword);
      } else {
        throw new Error('User not authenticated.');
      }
    } catch (error) {
      throw error; // Rethrow the error for handling in the component
    }
  }
}
