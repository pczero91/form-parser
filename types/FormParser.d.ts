import { IncomingMessage } from "http";

export = FormParser;

interface InputData {
    boundary: string,
    lastPart: Buffer,
    currentKey?: string,
    currentFile?: string,
    currentType?: string,
    readHeader?: boolean,
    readContent?: boolean
}

declare class FormParser {
    private _contentType: string;
    private _totalLength: string;    
    private _input: InputData | {};

    constructor(req: IncomingMessage);

    get totalLength(): string;

    getData(data: Buffer, callback: Function): void;
}

declare function multipartFormData(data: Buffer, input: InputData, callback: Function): InputData;