export class RegisterInfo {
    userName!: string;
    email!: string;
    password!: string;
    gender!: string;
    phone!: string;
    personalNumber!: string;
    
    
    constructor(data: any) {
        this.userName = data.userName;
        this.email = data.email;
        this.password = data.password;
        this.gender = data.gender;
        this.phone = data.phone;
        this.personalNumber = data.personalNumber;
    }
}