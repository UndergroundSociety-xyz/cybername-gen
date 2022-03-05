import { consonants, lastAfterConsonant, lastNames, lastPart1, lastPart2 } from "./constants/lastname";
import { maleFirstnames } from "./constants/male";
import { femaleFirstnames } from "./constants/female";
export class Name {
    /**
     * Constructs a random cyberpunkish full name according to gender
     * @param gender
     */
    constructor(gender) {
        this._gender = gender;
        this._lastname = Name._generateLastname();
        this._firstname = this._generateFirstname();
    }
    toString() {
        return `${this._firstname} ${this.lastname}`;
    }
    static _generateLastname() {
        const lastTypeChance = Math.floor(Math.random() * 100);
        let lastname;
        if (lastTypeChance <= 15) {
            const randomConsonant = consonants[Math.floor(Math.random() * consonants.length)];
            const randomLastAfterConsonant = lastAfterConsonant[Math.floor(Math.random() * lastAfterConsonant.length)];
            lastname = randomConsonant + randomLastAfterConsonant;
        }
        else if (lastTypeChance > 15 && lastTypeChance <= 30) {
            const randomLastPart1 = lastPart1[Math.floor(Math.random() * lastPart1.length)];
            const randomLastPart2 = lastPart2[Math.floor(Math.random() * lastPart2.length)];
            lastname = randomLastPart1 + randomLastPart2;
        }
        else {
            lastname = lastNames[Math.floor(Math.random() * lastNames.length)];
        }
        return lastname;
    }
    _generateFirstname() {
        const firstnames = this._gender === EGender.male ? maleFirstnames : femaleFirstnames;
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
export var EGender;
(function (EGender) {
    EGender[EGender["male"] = 0] = "male";
    EGender[EGender["female"] = 1] = "female";
})(EGender || (EGender = {}));
//# sourceMappingURL=name.js.map