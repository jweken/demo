declare namespace jwe {

    const enum Token {
        Hyphen = 1,
        Space = 2,
        Man = 4,
    }
    namespace jwe {
        interface Person {
            FirstName: string
            MidlleName?: string
            LastName: string
            Age?: Date
            Gender?: Token.Man
        }

    }
}