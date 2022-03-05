"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EGender = exports.Name = void 0;
const lastname_1 = require("./constants/lastname");
const male_1 = require("./constants/male");
const female_1 = require("./constants/female");
class Name {
    /**
     * Constructs a random cyberpunkish full name according to gender
     * @param gender
     */
    constructor(gender) {
        this._gender = gender;
        this._lastname = Name._generateLastname();
        this._firstname = this._generateFirstname();
    }
    /**
     * Introduces the generated name as a string like "firstname lastname"
     */
    toString() {
        return `${this.firstname} ${this.lastname}`;
    }
    static _generateLastname() {
        const lastTypeChance = Math.floor(Math.random() * 100);
        let lastname;
        if (lastTypeChance <= 15) {
            const randomConsonant = lastname_1.consonants[Math.floor(Math.random() * lastname_1.consonants.length)];
            const randomLastAfterConsonant = lastname_1.lastAfterConsonant[Math.floor(Math.random() * lastname_1.lastAfterConsonant.length)];
            lastname = randomConsonant + randomLastAfterConsonant;
        }
        else if (lastTypeChance > 15 && lastTypeChance <= 30) {
            const randomLastPart1 = lastname_1.lastPart1[Math.floor(Math.random() * lastname_1.lastPart1.length)];
            const randomLastPart2 = lastname_1.lastPart2[Math.floor(Math.random() * lastname_1.lastPart2.length)];
            lastname = randomLastPart1 + randomLastPart2;
        }
        else {
            lastname = lastname_1.lastNames[Math.floor(Math.random() * lastname_1.lastNames.length)];
        }
        return lastname;
    }
    _generateFirstname() {
        const firstnames = this._gender === EGender.male ? male_1.maleFirstnames : female_1.femaleFirstnames;
        return firstnames[Math.floor(Math.random() * firstnames.length)];
    }
    get gender() {
        return this._gender;
    }
    get lastname() {
        return this._lastname;
    }
    get firstname() {
        return this._firstname;
    }
}
exports.Name = Name;
var EGender;
(function (EGender) {
    EGender[EGender["male"] = 0] = "male";
    EGender[EGender["female"] = 1] = "female";
})(EGender = exports.EGender || (exports.EGender = {}));
//# sourceMappingURL=name.js.map