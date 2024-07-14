// deno-fmt-ignore-file
/* Automatically maintained from package.json. Do not edit! */

import { CompilerPackageNames, CompilerVersions } from "./compilerVersions.generated.js";
import { Node, CompilerApi } from "./CompilerApi.js";
import { assertNever } from "../utils/index.js";

export async function importCompilerApi(packageName: CompilerPackageNames) {
    // these explicit import statements are required to get webpack to include these modules
    switch (packageName) {
        case "typescript-5.5.3":
            return await import("typescript-5.5.3");
        case "typescript-5.4.5":
            return await import("typescript-5.4.5");
        case "typescript-5.3.3":
            return await import("typescript-5.3.3");
        case "typescript-5.2.2":
            return await import("typescript-5.2.2");
        case "typescript-5.1.6":
            return await import("typescript-5.1.6");
        case "typescript-5.0.4":
            return await import("typescript-5.0.4");
        case "typescript-4.9.5":
            return await import("typescript-4.9.5");
        case "typescript-4.8.4":
            return await import("typescript-4.8.4");
        case "typescript-4.7.4":
            return await import("typescript-4.7.4");
        case "typescript-next":
            return await import("typescript-next");
        default:
            return assertNever(packageName, `Not implemented version: ${packageName}`);
    }
}

export async function importLibFiles(packageName: CompilerPackageNames) {
    // these explicit import statements are required to get webpack to include these modules
    switch (packageName) {
        case "typescript-5.5.3":
            return await import("../resources/libFiles/typescript-5.5.3/index.js");
        case "typescript-5.4.5":
            return await import("../resources/libFiles/typescript-5.4.5/index.js");
        case "typescript-5.3.3":
            return await import("../resources/libFiles/typescript-5.3.3/index.js");
        case "typescript-5.2.2":
            return await import("../resources/libFiles/typescript-5.2.2/index.js");
        case "typescript-5.1.6":
            return await import("../resources/libFiles/typescript-5.1.6/index.js");
        case "typescript-5.0.4":
            return await import("../resources/libFiles/typescript-5.0.4/index.js");
        case "typescript-4.9.5":
            return await import("../resources/libFiles/typescript-4.9.5/index.js");
        case "typescript-4.8.4":
            return await import("../resources/libFiles/typescript-4.8.4/index.js");
        case "typescript-4.7.4":
            return await import("../resources/libFiles/typescript-4.7.4/index.js");
        case "typescript-next":
            return await import("../resources/libFiles/typescript-next/index.js");
        default:
            return assertNever(packageName, `Not implemented version: ${packageName}`);
    }
}

export type FactoryCodeGenerator = (ts: CompilerApi, node: Node) => string;

export async function getGenerateFactoryCodeFunction(packageName: CompilerPackageNames): Promise<FactoryCodeGenerator> {
    // these explicit import statements are required to get webpack to include these modules
    switch (packageName) {
        case "typescript-5.5.3":
            return (await import("../resources/factoryCode/typescript-5.5.3.generated.js")).generateFactoryCode as any;
        case "typescript-5.4.5":
            return (await import("../resources/factoryCode/typescript-5.4.5.generated.js")).generateFactoryCode as any;
        case "typescript-5.3.3":
            return (await import("../resources/factoryCode/typescript-5.3.3.generated.js")).generateFactoryCode as any;
        case "typescript-5.2.2":
            return (await import("../resources/factoryCode/typescript-5.2.2.generated.js")).generateFactoryCode as any;
        case "typescript-5.1.6":
            return (await import("../resources/factoryCode/typescript-5.1.6.generated.js")).generateFactoryCode as any;
        case "typescript-5.0.4":
            return (await import("../resources/factoryCode/typescript-5.0.4.generated.js")).generateFactoryCode as any;
        case "typescript-4.9.5":
            return (await import("../resources/factoryCode/typescript-4.9.5.generated.js")).generateFactoryCode as any;
        case "typescript-4.8.4":
            return (await import("../resources/factoryCode/typescript-4.8.4.generated.js")).generateFactoryCode as any;
        case "typescript-4.7.4":
            return (await import("../resources/factoryCode/typescript-4.7.4.generated.js")).generateFactoryCode as any;
        case "typescript-next":
            return (await import("../resources/factoryCode/typescript-next.generated.js")).generateFactoryCode as any;
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
        case "typescript-5.5.3":
            return (await import("../resources/publicApiInfo/typescript-5.5.3.generated.js"));
        case "typescript-5.4.5":
            return (await import("../resources/publicApiInfo/typescript-5.4.5.generated.js"));
        case "typescript-5.3.3":
            return (await import("../resources/publicApiInfo/typescript-5.3.3.generated.js"));
        case "typescript-5.2.2":
            return (await import("../resources/publicApiInfo/typescript-5.2.2.generated.js"));
        case "typescript-5.1.6":
            return (await import("../resources/publicApiInfo/typescript-5.1.6.generated.js"));
        case "typescript-5.0.4":
            return (await import("../resources/publicApiInfo/typescript-5.0.4.generated.js"));
        case "typescript-4.9.5":
            return (await import("../resources/publicApiInfo/typescript-4.9.5.generated.js"));
        case "typescript-4.8.4":
            return (await import("../resources/publicApiInfo/typescript-4.8.4.generated.js"));
        case "typescript-4.7.4":
            return (await import("../resources/publicApiInfo/typescript-4.7.4.generated.js"));
        case "typescript-next":
            return (await import("../resources/publicApiInfo/typescript-next.generated.js"));
        default:
            return assertNever(packageName, `Not implemented version: ${packageName}`);
    }
}
