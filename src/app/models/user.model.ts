export class User {
    private name: string;
    private lastname: string;
    private username: string;
    private email: string;
    private phone: string;
    private address: string;
    private password: string;

    constructor(data: any){
        this.name = data.name;
        this.lastname = data.lastname;
        this.username = data.username;
        this.email = data.email;
        this.phone = data.phone;
        this.address = data.address;
        this.password = data.password;
    }

}
