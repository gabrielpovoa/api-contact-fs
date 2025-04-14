import express, { Request, Response } from "express";
import { createContact, deleteContact, getContacts } from "../services/contact";

const filePath = './data/contact-list.txt';

const router = express.Router();

router.post('/contato', async (req: Request, res: Response) => {
    const name = req.body.name;

    if (!name || name.length < 2) {
        res.json({ error: "Name is required and must be at least 2 characters long" });
        return;
    }

    await createContact(name);


    res.status(201).json({ "name": name, })
})

router.get('/contatos', async (req: Request, res: Response) => {
    let list = await getContacts();

    res.json({
        contatos: list
    })
})

router.delete('/contato', async (req: Request, res: Response) => {
    const name = req.query.name;

    if (!name) {
        res.json({ error: "You need to send a name of a contact to delete" });
        return;
    }
    let list = await getContacts();
    await deleteContact(name as string);

    res.json({
        contatos: list
    })
})

export default router;