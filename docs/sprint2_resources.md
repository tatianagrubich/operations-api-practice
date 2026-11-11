GET /v1/operations/{operationId}
POST /v1/operations/search?page&pageSize в body - условия фильтрации (массив счетов, даты, статус, продавец)
GET /v1/operations?ids=[1,2,3] 
POST /v1/operations/scoring-decisions/search?page&pageSize в body - условия фильтрации (массив идентификаторов операций, даты, статус)
GET /v1/operations/scoring-decisions?ids=[1,2,3] 

GET /v1/accounts/{accountID}/operations

POST /v1/posting/search в body - условия фильтрации (массив операций, даты, статус)
GET /v1/posting/ids=[1,2,3] 

