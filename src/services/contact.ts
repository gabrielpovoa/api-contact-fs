import { readFile, writeFile } from "fs/promises";

const filePath = './data/contact-list.txt';

export const getContacts = async () => {
    let list: string[] = [];

    try {
        const data = await readFile(filePath, { encoding: 'utf8' })
        list = data.split('\n');
    } catch (error) { }

    return list;
};

export const createContact = async (name: string) => {
    let list = await getContacts();
    list.push(name);
    await writeFile(filePath, list.join('\n'));
}

export const deleteContact = async (name:string) => {
    let list = await getContacts();

    list = list.filter(item => item.toLowerCase() !== (name).toLowerCase())

    await writeFile(filePath, list.join('\n'));
}