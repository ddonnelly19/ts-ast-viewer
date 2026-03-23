const fileData = {
    fileName: `/lib.esnext.typedarrays.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "interface Uint8Array<TArrayBuffer extends ArrayBufferLike>{toBase64(options?:{alphabet?:\"base64\"|\"base64url\"|undefined;omitPadding?:boolean|undefined;},):string;setFromBase64(string:string,options?:{alphabet?:\"base64\"|\"base64url\"|undefined;lastChunkHandling?:\"loose\"|\"strict\"|\"stop-before-partial\"|undefined;},):{read:number;written:number;};toHex():string;setFromHex(string:string):{read:number;written:number;};}interface Uint8ArrayConstructor{fromBase64(string:string,options?:{alphabet?:\"base64\"|\"base64url\"|undefined;lastChunkHandling?:\"loose\"|\"strict\"|\"stop-before-partial\"|undefined;},):Uint8Array<ArrayBuffer>;fromHex(string:string,):Uint8Array<ArrayBuffer>;}"
};

export default fileData;