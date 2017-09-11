// import {NgbModule, NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
// const _ = require("underscore");

// export class CustomDateParserFormatter extends NgbDateParserFormatter {
//   parse(value: string): NgbDateStruct {
//     if (value) {
//       const dateParts = value.trim().split("/");
//       if (dateParts.length === 1 && _.isNumber(dateParts[0])) {
//         return {year: null, month: null, day: parseInt(dateParts[0])};
//       } else if (dateParts.length === 2 && Number(dateParts[0]) && _.isNumber(dateParts[1])) {
//         return {year: null, month: parseInt(dateParts[1]), day: parseInt(dateParts[0])};
//       } else if (dateParts.length === 3 && _.isNumber(dateParts[0]) && _.isNumber(dateParts[1]) && _.isNumber(dateParts[2])) {
//         return {year: parseInt(dateParts[2]), month: parseInt(dateParts[1]), day: parseInt(dateParts[2])};
//       }
//     }
//     return null;
//   }

//   format(date: NgbDateStruct): string {
//     return date ?
//         date.day + "/" + date.month + "/" + date.year : "";
//   }
// }

