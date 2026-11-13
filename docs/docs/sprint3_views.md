GET /v1/postings?page&pageSize

{
"postings" : NULL
[
    {   
        "postingRef":""string"" NOT NULL
        "conversationRate" : NOT NULL
            [
                {   
                    "currency":""string"", NOT NULL
                    "amount": number  NOT NULL
                },
                {   
                    "currency":""string"", NOT NULL
                    "amount": number NOT NULL
                }
            ],
        "status":""string"" NOT NULL ENUM
        "account" : NOT NULL
                    {
                        "accountNumber":""string"", NOT NULL
                        "accountID": number  NOT NULL
                    },
        "scoringDecision" : NULL
                    {
                        "riskSigns": NULL
                            ["string"]                                          
                        "blocked": boolean  NOT NULL 
                    }
    }
]
}




accountId, postingRef - на фронт не передается (или хотя бы не светится)
accountNumber - маскируется
riskSigns - не передается




PostingsResponseDTO
    {
        postings: PostingDTO    [] | null
    }

PostingDTO
    {
        postingRef: string                 NOT NULL
        conversationRate: ConversionAmount[] NOT NULL
        status: string                     NOT NULL
        account: AccountDTO                NOT NULL
        scoringDecision: ScoringDecisionDTO | null
    }
ConversionAmount
    {
        currency: string                   NOT NULL
        amount: number                     NOT NULL
    }

AccountDTO
    {
        accountNumber: string              NOT NULL
        accountID: number                  NOT NULL
    }

ScoringDecisionDTO
    {
        riskSigns: string[] | null
        blocked: boolean                   NOT NULL
    }

accountId, postingRef, operationId - на фронт не передается
accountNumber - маскируется
riskSigns - не передается