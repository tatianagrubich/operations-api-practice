
Mobile
GET /accounts # счета клиента 
# нарушает границы Bounded Context. мастер-системой является Core Banking. у нашей системы единственная ответственность это фиксация, фильтрация и выдача истории транзакций

GET /accounts/{accountId}/operations?offset=0&limit=20&status=HOLD&startDate=''&endDate='' # операции счёта
GET /accounts/{accountId}/operations/{operationId} # детали операции
# для получения деталки операции нет необходимости использовать {accountId}, т.к. идентификатор операции {operationId} сам
# по себе уникален

CRM 
GET /operations?accountId=123&offset=0&limit=20&status=HOLD&startDate=''&endDate=''  — операции
GET /operations/{operationId}  — конкретная операция


