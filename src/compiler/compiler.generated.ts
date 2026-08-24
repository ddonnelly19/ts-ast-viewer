// deno-fmt-ignore-file
/* Automatically maintained from package.json. Do not edit! */

import { CompilerPackageNames, CompilerVersions } from "./compilerVersions.generated.js";
import { Node, CompilerApi } from "./CompilerApi.js";
import { assertNever } from "../utils/index.js";

export async function importCompilerApi(packageName: CompilerPackageNames) {
    // these explicit import statements are required to get webpack to include these modules
    switch (packageName) {
        case "typescript-6.0.3":
            return await import("typescript-6.0.3");
        case "typescript-5.9.3":
            return await import("typescript-5.9.3");
        case "typescript-5.8.3":
            return await import("typescript-5.8.3");
        case "typescript-5.7.3":
            return await import("typescript-5.7.3");
        case "typescript-5.6.3":
            return await import("typescript-5.6.3");
        case "typescript-5.5.4":
            return await import("typescript-5.5.4");
        case "typescript-5.4.5":
            return await import("typescript-5.4.5");
        case "typescript-5.3.3":
            return await import("typescript-5.3.3");
        case "typescript-5.2.2":
            return await import("typescript-5.2.2");
        default:
            return assertNever(packageName, `Not implemented version: ${packageName}`);
    }
}

export async function importLibFiles(packageName: CompilerPackageNames) {
    // these explicit import statements are required to get webpack to include these modules
    switch (packageName) {
        case "typescript-6.0.3":
            return await import("../resources/libFiles/typescript-6.0.3/index.js");
        case "typescript-5.9.3":
            return await import("../resources/libFiles/typescript-5.9.3/index.js");
        case "typescript-5.8.3":
            return await import("../resources/libFiles/typescript-5.8.3/index.js");
        case "typescript-5.7.3":
            return await import("../resources/libFiles/typescript-5.7.3/index.js");
        case "typescript-5.6.3":
            return await import("../resources/libFiles/typescript-5.6.3/index.js");
        case "typescript-5.5.4":
            return await import("../resources/libFiles/typescript-5.5.4/index.js");
        case "typescript-5.4.5":
            return await import("../resources/libFiles/typescript-5.4.5/index.js");
        case "typescript-5.3.3":
            return await import("../resources/libFiles/typescript-5.3.3/index.js");
        case "typescript-5.2.2":
            return await import("../resources/libFiles/typescript-5.2.2/index.js");
        default:
            return assertNever(packageName, `Not implemented version: ${packageName}`);
    }
}

export type FactoryCodeGenerator = (ts: CompilerApi, node: Node) => string;

export async function getGenerateFactoryCodeFunction(packageName: CompilerPackageNames): Promise<FactoryCodeGenerator> {
    // these explicit import statements are required to get webpack to include these modules
    switch (packageName) {
        case "typescript-6.0.3":
            return (await import("../resources/factoryCode/typescript-6.0.3.generated.js")).generateFactoryCode as any;
        case "typescript-5.9.3":
            return (await import("../resources/factoryCode/typescript-5.9.3.generated.js")).generateFactoryCode as any;
        case "typescript-5.8.3":
            return (await import("../resources/factoryCode/typescript-5.8.3.generated.js")).generateFactoryCode as any;
        case "typescript-5.7.3":
            return (await import("../resources/factoryCode/typescript-5.7.3.generated.js")).generateFactoryCode as any;
        case "typescript-5.6.3":
            return (await import("../resources/factoryCode/typescript-5.6.3.generated.js")).generateFactoryCode as any;
        case "typescript-5.5.4":
            return (await import("../resources/factoryCode/typescript-5.5.4.generated.js")).generateFactoryCode as any;
        case "typescript-5.4.5":
            return (await import("../resources/factoryCode/typescript-5.4.5.generated.js")).generateFactoryCode as any;
        case "typescript-5.3.3":
            return (await import("../resources/factoryCode/typescript-5.3.3.generated.js")).generateFactoryCode as any;
        case "typescript-5.2.2":
            return (await import("../resources/factoryCode/typescript-5.2.2.generated.js")).generateFactoryCode as any;
        default:
            return assertNever(packageName, `Not implemented version: ${packageName}`);
    }
}

export interface PublicApiInfo {
    nodePropertiesBySyntaxKind: Map<string, Set<string>>;
    symbolProperties: Set<string>;
    typeProperties: Set<string>;
    signatureProperties: Set<string>;
}

export async function getPublicApiInfo(packageName: CompilerPackageNames): Promise<PublicApiInfo> {
    // these explicit import statements are required to get webpack to include these modules
    switch (packageName) {
        case "typescript-6.0.3":
            return (await import("../resources/publicApiInfo/typescript-6.0.3.generated.js"));
        case "typescript-5.9.3":
            return (await import("../resources/publicApiInfo/typescript-5.9.3.generated.js"));
        case "typescript-5.8.3":
            return (await import("../resources/publicApiInfo/typescript-5.8.3.generated.js"));
        case "typescript-5.7.3":
            return (await import("../resources/publicApiInfo/typescript-5.7.3.generated.js"));
        case "typescript-5.6.3":
            return (await import("../resources/publicApiInfo/typescript-5.6.3.generated.js"));
        case "typescript-5.5.4":
            return (await import("../resources/publicApiInfo/typescript-5.5.4.generated.js"));
        case "typescript-5.4.5":
            return (await import("../resources/publicApiInfo/typescript-5.4.5.generated.js"));
        case "typescript-5.3.3":
            return (await import("../resources/publicApiInfo/typescript-5.3.3.generated.js"));
        case "typescript-5.2.2":
            return (await import("../resources/publicApiInfo/typescript-5.2.2.generated.js"));
        default:
            return assertNever(packageName, `Not implemented version: ${packageName}`);
    }
}
