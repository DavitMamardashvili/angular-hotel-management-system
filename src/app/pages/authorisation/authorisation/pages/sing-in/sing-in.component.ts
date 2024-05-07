import { Component } from '@angular/core';
import { FormValidationService } from '../../services/form-validation.service';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../../../core/services/http.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent {

  hidePassword = true;


  constructor(public validator: FormValidationService,
    private httpService:HttpService) { }

  // constructor(private firebaseAuthService: FirebaseAuthService,
  //   public validator: FormValidationService ,
  //   private errorAlertService: ErrorAlertService,
  //   private httpService:HttpService) { }


    loginWithSwaggerAPI(email: string, password: string) {
      console.log('Logging in with Swagger API...');
      this.httpService.post('api/User/LogIn', {
        email: email,
        password: password
      }).subscribe((response: any) => {
        if (response.success) {
          // Handle successful login
          console.log('Login successful.');
          const jwtToken = response.token;
          localStorage.setItem('jwtToken', jwtToken);
          const userInfo = response.user;
          // Set user information in user manager
        } else {
          // Handle unsuccessful login
          console.log('Login unsuccessful.');
          Swal.fire("There was a problem logging in. Please check your credentials.");
        }
      }, (error) => {
        // Handle error
        console.error('Error logging in:', error);
        Swal.fire("There was a problem logging in. Please try again later.");
      });
    }

    onFormSubmit(form:NgForm){
      const requestData = {
        email: form.value.email,
        password: form.value.password
      };
      this.httpService.post('api/User/LogIn', requestData)
    .subscribe((response: any) => {
      console.log(response)
      if (response && response.token) {
        // Save JWT token in local storage
        localStorage.setItem('jwtToken', response.token);

        // Optionally, perform additional actions after successful login

        // Reset the form
        form.resetForm();
      } else {
        // Handle error if token is not present in the response
        console.error('JWT token not found in response:', response);
        // Optionally, display an error message to the user
      }
    }, (error) => {
      // Handle error if HTTP request fails
      console.error('Error logging in:', error);
      // Optionally, display an error message to the user
    });
    }
  onResetPasswordBtnClick(){}
  //   onResetPasswordBtnClick() {
  //     Swal.fire({
  //       title: "Enter your email address",
  //       input: "text",
  //       inputAttributes: {
  //         autocapitalize: "off"
  //       },
  //       showCancelButton: true,
  //       confirmButtonText: "Sent reset link",
  //       showLoaderOnConfirm: true
  //     })
  //       .then((result) => {
  //         this.firebaseAuthService.resetPassword(result.value).then(response => {
  //           Swal.fire("Reset link was send successfully");
  //         })
  //       });
  //   }
}
