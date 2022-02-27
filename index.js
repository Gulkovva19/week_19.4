// class Validator {
//     constructor() {

//     }
//     isEmail(str) {
//         return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
//     }
//     isDomain(str) {
//         return ((str.indexOf('.com') !== -1) || (str.indexOf('.ru') !== -1))
//     }
//     isDate(str) {
//         let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
//         return date === null ? false : true;
//     }
//     isPhone(str) {
//         let phone = str.match(/\+7\ \([0-9]{3}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/);
//         return phone === null ? false : true;
//     }

// }
// let validator = new Validator();
// console.log(validator.isEmail('test@gmail.com'));
// console.log(validator.isDomain('test.net'));
// console.log(validator.isDate('09.12.2021'));
// console.log(validator.isPhone('+38 (096) 23-14-014'));


class Validator {

    static isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    static isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.ru') !== -1))
    }
    static isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    static isPhone(str) {
        let phone = str.match(/\+7\ \([0-9]{3}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/);
        return phone === null ? false : true;
    }

}

console.log(Validator.isEmail('test@gmail.com'));
console.log(Validator.isDomain('test.net'));
console.log(Validator.isDate('09.12.2021'));
console.log(Validator.isPhone('+7 (096) 235-14-14'));