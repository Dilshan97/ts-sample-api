import { Request, Response } from "express";
import { Invoice } from "../../models/invoice";


export function getInvoices(req: Request, res: Response) {
    res.send(Invoice.get());
}
