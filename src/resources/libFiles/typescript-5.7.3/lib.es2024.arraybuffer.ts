const fileData = {
    fileName: `/lib.es2024.arraybuffer.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "/// <reference no-default-lib=\"true\"/>\ninterface ArrayBuffer{get maxByteLength():number;get resizable():boolean;resize(newByteLength?:number):void;get detached():boolean;transfer(newByteLength?:number):ArrayBuffer;transferToFixedLength(newByteLength?:number):ArrayBuffer;}interface ArrayBufferConstructor{new(byteLength:number,options?:{maxByteLength?:number;}):ArrayBuffer;}"
};

export default fileData;