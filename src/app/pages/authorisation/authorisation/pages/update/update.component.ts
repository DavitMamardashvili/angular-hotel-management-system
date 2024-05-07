import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormValidationService } from '../../services/form-validation.service';
import { FirebaseAuthService } from '../../../../../core/services/firebase-auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  hidePassword = true;
  hidecConfirmPassword = true;
  userInfo: any;


  constructor(private firebaseAuthService: FirebaseAuthService,
    public validator: FormValidationService,
  ) { }


  // ngOnInit(): void {
  //   this.userInfo = this.userManager.getUserInfo();
  // }
  onFormSubmit(form: NgForm): void{}
 // onFormSubmit(form: NgForm): void {
  //   const formData = {
  //     email: this.userManager.getUserInfo().email,
  //     currentPassword: form.value.password,
  //     newPassword: form.value.newPassword,
  //     // Include other form data as needed
  //   };

  //   // Make HTTP POST request to update user data
  //   this.http.post(this.updateUserUrl, formData)
  //     .subscribe(() => {
  //       Swal.fire({
  //         title: "User information was updated",
  //         icon: "success"
  //       });
  //       form.resetForm();
  //     }, (error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Are you sure that it's your correct password?",
  //       });
  //     });
  // }
 

  logOut() {
    this.firebaseAuthService.signOut()
      .then(() => {
        Swal.fire({
          title: "log Outed",
          icon: "success"
        });
      })
  }

}
