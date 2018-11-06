"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
    static get() {
        return [
            new Item("T41", "Samsumg Alpha", 97000),
            new Item("T45", "Iphone 7", 130000.54)
        ];
    }
}
exports.Item = Item;
//# sourceMappingURL=item.js.map