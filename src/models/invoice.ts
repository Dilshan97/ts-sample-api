 export class Invoice {
    id: String;
    customer: String;
    amount: Number;

    constructor(id:String, customer:String, amount:Number) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }

    public static get() : Invoice[] {
        return [
            new Invoice("RB001", "Michael Tuwer", 2450),
            new Invoice("RB002", "Roxy Amanda", 1550)
        ];
    }
}
