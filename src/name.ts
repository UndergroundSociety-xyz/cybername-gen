import {consonants, lastAfterConsonant, lastNames, lastPart1, lastPart2} from "./constants/lastname";
import {maleFirstnames} from "./constants/male";
import {femaleFirstnames} from "./constants/female";

export class Name {
    private readonly _gender: EGender
    private readonly _lastname: string
    private readonly _firstname: string

    /**
     * Constructs a random cyberpunkish full name according to gender
     * @param gender
     */
    constructor(gender: EGender) {
        this._gender = gender
        this._lastname = Name._generateLastname()
        this._firstname = this._generateFirstname()
    }

    /**
     * Introduces the generated name as a string like "firstname lastname"
     */
    public toString() {
        return `${this.firstname} ${this.lastname}`
    }

    private static _generateLastname(): string {

            const lastTypeChance = Math.floor(Math.random() * 100)

            let lastname

            if(lastTypeChance <= 15){
                const randomConsonant = consonants[Math.floor(Math.random() * consonants.length)]
                const randomLastAfterConsonant = lastAfterConsonant[Math.floor(Math.random() * lastAfterConsonant.length)]

                lastname = randomConsonant + randomLastAfterConsonant

            } else if(lastTypeChance > 15 && lastTypeChance <= 30){
                const randomLastPart1 = lastPart1[Math.floor(Math.random() * lastPart1.length)]
                const randomLastPart2 = lastPart2[Math.floor(Math.random() * lastPart2.length)]

                lastname = randomLastPart1 + randomLastPart2
            } else {
                lastname = lastNames[Math.floor(Math.random() * lastNames.length)]
            }

        return lastname
    }

    private _generateFirstname(): string {
        const firstnames = this._gender === EGender.male ? maleFirstnames : femaleFirstnames

        return firstnames[Math.floor(Math.random() * firstnames.length)]
    }

    get gender(): EGender {
        return this._gender
    }

    get lastname(): string {
        return this._lastname
    }

    get firstname(): string {
        return this._firstname
    }
}

export enum EGender{
    male, female
}