Мобилка

GET /accounts/{accountId}/operations?offset=0&limit=20&status=enum: [HOLD, SETTLED]&startDate=''&endDate=''categoryText=     
OperationListItem
operationId — string — обязательный — идентификатор операции
status — string (enum: HOLD, SETTLED) — обязательный — статус операции
operationDateTime — string (date-time) — обязательный — дата и время совершения операции
accountId — string — обязательный — идентификатор счёта
merchantName — string — необязательный — название продавца
categoryText — string — необязательный — название категории трат
amountValue — number — обязательный — сумма операции
amountCurrency — string — обязательный — валюта суммы

conversionRate — number — необязательный — курс конвертации
# если не будем отображать на клиенте курс конвертации, то из ДТО лучше убрать

CRM поддержка

GET /operations?accountId=123&offset=0&limit=20&status=HOLD&startDate=''&endDate=''  
# название ДТО говорит о получении детальной информации об операции, а привязанный эндпоинт возвращает список операций
# нужна привязка ДТО к другому урлу

OperationDetail
account — object — обязательный — сведения о счёте
account.accountId — string — обязательный
account.currency — string — обязательный — валюта счёта
account.maskedNumber — обязательный — маскированное значение источника средств (если источник — банковская карта: показать первые 6 и последние 4 символа, середину заменить на *;если источник — расчётный счёт: показать первые 5 и последние 4 символа, середину заменить на*)
amount — array — обязательный — массив суммы операции в разных валютах
amount[].value — number — обязательный — значение суммы
amount[].currency — string — обязательный — валюта суммы
merchant — object — необязательный — данные продавца (тут можно добавить что-то, если надо)
merchant.brandName — string — необязательный — название продавца
merchant.terminalAddress - string - необязательный - адрес терминала, где прошла операция (страна, город, улица, индекс. Наверное, нет смысла разбивать на отдельные строки в объекте)category — object — необязательный — данные категории трат
category.text — string — необязательный — название категории трат

# как будто не хватает идентификатора самой операции
# не хватает scoringDecision по конкретной операции