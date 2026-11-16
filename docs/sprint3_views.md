Мобилка

GET /accounts/{accountId}/operations?offset=0&limit=20&status=enum:[HOLD, SETTLED]&startDate=''&endDate=''categoryText=     

OperationListItem
operationId — string — обязательный — идентификатор операции
status — string (enum: HOLD, SETTLED) — обязательный — статус операции
statusDescription - string - необязательный - описание статуса операции
operationDateTime — string (date-time) — обязательный — дата и время совершения операции
accountId — string — обязательный — идентификатор счёта
accountNumber — обязательный — номер счёта
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
account.accountNumber — обязательный — маскированное значение источника средств (показать первые 5 и последние 4 символа, середину заменить на*)
operation - object — обязательный — сведения о операции
operation.operationId — string — обязательный — идентификатор операции
operation.amounts — array — обязательный — массив объектов сумм операции
operation.amounts[].value — number — обязательный — значение суммы
operation.amounts[].currency — string — обязательный — валюта суммы
operation.merchant — string — необязательный — название продавца
operation.categoryText — string — необязательный — название категории трат
operation.status — string (enum: HOLD, SETTLED) — обязательный — статус операции
operation.statusDescription - string - необязательный - описание статуса операции
operation.scoringDecision - object - необязательный - данные решения скоринга operation.scoringDecision.code - string - обязательный - код решения
operation.scoringDecision.description - string - обязательный - описание решения 