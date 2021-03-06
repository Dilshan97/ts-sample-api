let express = require('express');

import * as InvoicesController from "./controllers/invoices/invoiceController";
import * as ItemsController from "./controllers/items/ItemController";

let app = express();

app.all('/*', function(req:any, res:any, next:any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/invoices', InvoicesController.getInvoices);
app.get('/items', ItemsController.getItems);



export default app;