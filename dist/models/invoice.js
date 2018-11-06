"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    static get() {
        return [
            new Invoice("RB001", "Michael Tuwer", 2450),
            new Invoice("RB002", "Roxy Amanda", 1550)
        ];
    }
}
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.js.map