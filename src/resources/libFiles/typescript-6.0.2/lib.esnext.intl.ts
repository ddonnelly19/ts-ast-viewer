const fileData = {
    fileName: `/lib.esnext.intl.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: "/// <reference lib=\"esnext.temporal\" />\ndeclare namespace Intl{type FormattableTemporalObject=Temporal.PlainDate|Temporal.PlainYearMonth|Temporal.PlainMonthDay|Temporal.PlainTime|Temporal.PlainDateTime|Temporal.Instant;interface DateTimeFormat{format(date?:FormattableTemporalObject|Date|number):string;formatToParts(date?:FormattableTemporalObject|Date|number):DateTimeFormatPart[];formatRange(startDate:FormattableTemporalObject|Date|number,endDate:FormattableTemporalObject|Date|number):string;formatRangeToParts(startDate:FormattableTemporalObject|Date|number,endDate:FormattableTemporalObject|Date|number):DateTimeRangeFormatPart[];}interface Locale{getCalendars():string[];getCollations():string[];getHourCycles():string[];getNumberingSystems():string[];getTextInfo():TextInfo;getTimeZones():string[]|undefined;getWeekInfo():WeekInfo;}interface TextInfo{direction?:\"ltr\"|\"rtl\";}interface WeekInfo{firstDay:number;weekend:number[];}}"
};

export default fileData;