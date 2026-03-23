const fileData = {
    fileName: `/lib.es2024.sharedmemory.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "/// <reference no-default-lib=\"true\"/>\n/// <reference lib=\"es2020.bigint\" />\ninterface Atomics{waitAsync(typedArray:Int32Array,index:number,value:number,timeout?:number):{async:false;value:\"not-equal\"|\"timed-out\";}|{async:true;value:Promise<\"ok\"|\"timed-out\">;};waitAsync(typedArray:BigInt64Array,index:number,value:bigint,timeout?:number):{async:false;value:\"not-equal\"|\"timed-out\";}|{async:true;value:Promise<\"ok\"|\"timed-out\">;};}interface SharedArrayBuffer{get growable():boolean;get maxByteLength():number;grow(newByteLength?:number):void;}interface SharedArrayBufferConstructor{new(byteLength:number,options?:{maxByteLength?:number;}):SharedArrayBuffer;}"
};

export default fileData;