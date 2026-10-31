# Consumers Operations History API

## Mobile App

| Что читает | Где |
|---|---|
| `OperationListItem.id` | список операций |
| `OperationListItem.status` | список операций |
| `OperationListItem.amount` | список операций (ссылается на `Money`) |
| `OperationListItem.accountNumber` | список операций (маскированный) |
| `OperationDetail.customer` | детали операции |
| `OperationDetail.audit` | детали операции |

**Не читает:** `Merchant`, `Document`, `scoringDecision`.

## CRM

| Что читает | Где |
|---|---|
| `OperationDetail.customer` | детали операции |
| `OperationDetail.audit` | детали операции |
| `OperationDetail.merchant` | детали операции |
| `OperationDetail.amount` | детали операции (ссылается на `Money`) |
| `ApplyDecisionRequest.scoringDecision` | корректировка решения |
| `ApplyDecisionRequest.reason` | корректировка решения |

**Использует:** `amount` для отображения, `scoringDecision` для корректировки.

## Analytics

| Что читает | Где |
|---|---|
| `OperationListItem.id` | список операций |
| `OperationListItem.status` | список операций |
| `OperationListItem.amount` | список операций (ссылается на `Money`) |

**Не читает:** `customer`, `audit`, `merchant`, `accountNumber`.

## Partner (демонстрационный пример)

| Что читает | Где |
|---|---|
| `Money.amount` | все модели, где используется `Money` |
| `Money.currency` | все модели, где используется `Money` |

**Примечание:** Partner — демонстрационный consumer из презентации (слайд 18). В сквозном кейсе темы 4 consumers — Mobile и CRM.