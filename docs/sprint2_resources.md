
Mobile
GET /accounts                         счета клиента 
GET /accounts/{accountId}/operations?offset=0&limit=20&status=HOLD&startDate=''&endDate=''      операции счёта
GET /accounts/{accountId}/operations/{operationId} детали операции. 

CRM 
GET /operations?accountId=123&offset=0&limit=20&status=HOLD&startDate=''&endDate=''  — операции
GET /operations/{operationId}  — конкретная операция


