const fileData = {
    fileName: `/lib.es2024.promise.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "interface PromiseWithResolvers<T>{promise:Promise<T>;resolve:(value:T|PromiseLike<T>)=>void;reject:(reason?:any)=>void;}interface PromiseConstructor{withResolvers<T>():PromiseWithResolvers<T>;}"
};

export default fileData;