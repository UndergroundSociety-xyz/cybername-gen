export declare class Name {
    private readonly _gender;
    private readonly _lastname;
    private readonly _firstname;
    /**
     * Constructs a random cyberpunkish full name according to gender
     * @param gender
     */
    constructor(gender: EGender);
    toString(): string;
    private static _generateLastname;
    private _generateFirstname;
    get gender(): EGender;
    get lastname(): string;
    get firstname(): string;
}
export declare enum EGender {
    male = 0,
    female = 1
}
