const fileData = {
    fileName: `/lib.es2018.asynciterable.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "/// <reference no-default-lib=\"true\"/>\n/// <reference lib=\"es2015.symbol\" />\n/// <reference lib=\"es2015.iterable\" />\ninterface SymbolConstructor{readonly asyncIterator:unique symbol;}interface AsyncIterator<T,TReturn=any,TNext=any>{next(...[value]:[]|[TNext]):Promise<IteratorResult<T,TReturn>>;return?(value?:TReturn|PromiseLike<TReturn>):Promise<IteratorResult<T,TReturn>>;throw?(e?:any):Promise<IteratorResult<T,TReturn>>;}interface AsyncIterable<T,TReturn=any,TNext=any>{[Symbol.asyncIterator]():AsyncIterator<T,TReturn,TNext>;}interface AsyncIterableIterator<T,TReturn=any,TNext=any>extends AsyncIterator<T,TReturn,TNext>{[Symbol.asyncIterator]():AsyncIterableIterator<T,TReturn,TNext>;}interface AsyncIteratorObject<T,TReturn=unknown,TNext=unknown>extends AsyncIterator<T,TReturn,TNext>{[Symbol.asyncIterator]():AsyncIteratorObject<T,TReturn,TNext>;}"
};

export default fileData;