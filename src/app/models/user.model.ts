export class User {
    private name: string;
    private lastname: string;
    private username: string;
    private email: string;
    private phone: string;
    private address: string;

    constructor(name: string, lastname: string, username: string, email: string, phone: string, address: string){
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

}
