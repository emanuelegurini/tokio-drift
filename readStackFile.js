import { promises as fsPromises } from "fs"

const { readFile } = fsPromises;

export const readStackFile = (path) => {
    return  readFile(path, "utf8");
};
