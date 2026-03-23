const fileData = {
    fileName: `/lib.esnext.collection.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "/// <reference lib=\"es2025.collection\" />\ninterface Map<K,V>{getOrInsert(key:K,defaultValue:V):V;getOrInsertComputed(key:K,callback:(key:K)=>V):V;}interface WeakMap<K extends WeakKey,V>{getOrInsert(key:K,defaultValue:V):V;getOrInsertComputed(key:K,callback:(key:K)=>V):V;}"
};

export default fileData;