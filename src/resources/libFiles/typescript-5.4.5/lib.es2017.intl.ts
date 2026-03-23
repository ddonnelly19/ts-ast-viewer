const fileData = {
    fileName: `/lib.es2017.intl.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "/// <reference no-default-lib=\"true\"/>\ndeclare namespace Intl{interface DateTimeFormatPartTypesRegistry{day:any;dayPeriod:any;era:any;hour:any;literal:any;minute:any;month:any;second:any;timeZoneName:any;weekday:any;year:any;}type DateTimeFormatPartTypes=keyof DateTimeFormatPartTypesRegistry;interface DateTimeFormatPart{type:DateTimeFormatPartTypes;value:string;}interface DateTimeFormat{formatToParts(date?:Date|number):DateTimeFormatPart[];}}"
};

export default fileData;