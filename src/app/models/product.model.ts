export class Product {
    private productId: number;
    private image: string;
    private name: string;
    private category: string;
    private price: string;
    private quantity: string;
    private description: string;
    private color: string;

    constructor(
        data: any,
    )
    {
        this.productId = +data.id
        this.image = data.image;
        this.name = data.name;
        this.category = data.category;
        this.price = data.price;
        this.quantity = data.quantity;
        this.description = data.description;
        this.color = data.color;
    }
}
