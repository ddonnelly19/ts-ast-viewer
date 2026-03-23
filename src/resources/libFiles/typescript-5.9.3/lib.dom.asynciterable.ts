const fileData = {
    fileName: `/lib.dom.asynciterable.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "/// <reference no-default-lib=\"true\"/>\ninterface FileSystemDirectoryHandleAsyncIterator<T>extends AsyncIteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.asyncIterator]():FileSystemDirectoryHandleAsyncIterator<T>;}interface FileSystemDirectoryHandle{[Symbol.asyncIterator]():FileSystemDirectoryHandleAsyncIterator<[string,FileSystemHandle]>;entries():FileSystemDirectoryHandleAsyncIterator<[string,FileSystemHandle]>;keys():FileSystemDirectoryHandleAsyncIterator<string>;values():FileSystemDirectoryHandleAsyncIterator<FileSystemHandle>;}interface ReadableStreamAsyncIterator<T>extends AsyncIteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.asyncIterator]():ReadableStreamAsyncIterator<T>;}interface ReadableStream<R=any>{[Symbol.asyncIterator](options?:ReadableStreamIteratorOptions):ReadableStreamAsyncIterator<R>;values(options?:ReadableStreamIteratorOptions):ReadableStreamAsyncIterator<R>;}"
};

export default fileData;