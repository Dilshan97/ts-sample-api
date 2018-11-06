export class Item {

    id: String;
    name: String;
    amount: Number;

    constructor(id:String, name:String, amount:Number) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }

    public static get() : Item[] {
        return [
            new Item("T41", "Samsumg Alpha", 97000),
            new Item("T45", "Iphone 7", 130000.54)
        ];
    }
}
