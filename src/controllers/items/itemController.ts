import { Request, Response } from "express";
import { Item } from "../../models/item";


export function getItems(req: Request, res: Response) {
    res.send(Item.get());
}
