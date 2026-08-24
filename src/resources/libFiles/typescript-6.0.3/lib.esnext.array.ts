const fileData = {
    fileName: `/lib.esnext.array.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "interface ArrayConstructor{fromAsync<T>(iterableOrArrayLike:AsyncIterable<T>|Iterable<T|PromiseLike<T>>|ArrayLike<T|PromiseLike<T>>):Promise<T[]>;fromAsync<T,U>(iterableOrArrayLike:AsyncIterable<T>|Iterable<T>|ArrayLike<T>,mapFn:(value:Awaited<T>,index:number)=>U,thisArg?:any):Promise<Awaited<U>[]>;}"
};

export default fileData;