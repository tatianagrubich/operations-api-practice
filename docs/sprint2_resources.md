Mobile
1) GET /accounts/{accountId}/operations?offset=0&limit=20&status=enum:[HOLD, SETTLED]&startDate=''&endDate=''categoryText=  - поиск операций по счету клиента и дополнительным фильтрам
2) GET /operations/{operationId}/info - краткая информация по операции

CRM 
1) GET /operations?accountId=123&offset=0&limit=20&status=HOLD&startDate=''&endDate='' - поиск операций по фильтрам 
GET /operations/{operationId}/details # детальная информация по операции


