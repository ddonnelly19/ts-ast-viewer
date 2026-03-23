const fileData = {
    fileName: `/lib.esnext.promise.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "/// <reference no-default-lib=\"true\"/>\ninterface PromiseWithResolvers<T>{promise:Promise<T>;resolve:(value:T|PromiseLike<T>)=>void;reject:(reason?:any)=>void;}interface PromiseConstructor{withResolvers<T>():PromiseWithResolvers<T>;}"
};

export default fileData;