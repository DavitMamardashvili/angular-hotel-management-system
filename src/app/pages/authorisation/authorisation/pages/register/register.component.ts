import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../../../../core/services/firebase-auth.service';
import { FormValidationService } from '../../services/form-validation.service';
import { HttpService } from '../../../../../core/services/http.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegisterInfo } from '../../models/RegisterInfo';
import { EmailAndPassword } from '../../models/EmailAndPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private firebaseAuthService: FirebaseAuthService,
    public validator: FormValidationService,
    private httpService: HttpService) { }

    onFormSubmit(form: NgForm) {
      if (!form.valid || form.value.password !== form.value.confirmPassword) {
        return; // Exit function if form is invalid or passwords don't match
      }
  
      const registerInfoInstance: RegisterInfo = new RegisterInfo(form.value);
      const authInfo:EmailAndPassword = new EmailAndPassword(form.value);
  
      this.firebaseAuthService.registerWhithEmailAndPassword(authInfo)
        .then(() => {
          // If registration is successful, send data to server endpoint
          this.httpService.post('user/registerUser', registerInfoInstance)
            .subscribe(() => {
              Swal.fire({
                title: "Good job!",
                text: "You have been registered successfully. Please check your email for the verification link.",
                icon: "success"
              });
              form.resetForm(); 
            }, (error) => {
              // Handle error if data posting to server fails
              Swal.fire("There was a problem registering. Please try again later.");

            });
        })
        .catch((error) => {
          Swal.fire("There was a problem registering. Please try again later.");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "There was a problem. It's possible that you are already registered with this email address.",
          });

        });
    }
}
