Мобилка

GET /accounts/{accountId}/operations?offset=0&limit=20&status=enum:[HOLD, SETTLED]&startDate=''&endDate=''categoryText=     

OperationListItem
operationId — string — обязательный — идентификатор операции
status — string (enum: HOLD, SETTLED) — обязательный — статус операции
operationDateTime — string (date-time) — обязательный — дата и время совершения операции
accountId — string — обязательный — идентификатор счёта
account.maskedNumber — обязательный — номер счёта
merchantName — string — необязательный — название продавца
categoryText — string — необязательный — название категории трат
amountValue — number — обязательный — сумма операции
amountCurrency — string — обязательный — валюта суммы

CRM поддержка

GET /operations/{operationId}/details

OperationDetail
account — object — обязательный — сведения о счёте
account.accountId — string — обязательный
account.currency — string — обязательный — валюта счёта
account.maskedNumber — обязательный — маскированное значение источника средств (показать первые 5 и последние 4 символа, середину заменить на*)
amount — array — обязательный — массив суммы операции в разных валютах
amount[].value — number — обязательный — значение суммы
amount[].currency — string — обязательный — валюта суммы
merchant — string — необязательный — название продавца
categoryText — string — необязательный — название категории трат
operation - object — обязательный — сведения о операции
operationId — string — обязательный — идентификатор операции
status — string (enum: HOLD, SETTLED) — обязательный — статус операции
statusDescription - string - необязательный - описание статуса операции
scoringDecision - object - необязательный - данные решения скоринга 
scoringDecision.code - код решения
scoringDecision.Description - описание решения 