# Карта reuse: Operations History API

## Где используется Money

| Схема | Поле | Ссылка |
|---|---|---|
| `OperationListItem` | `amount` | `$ref: '#/components/schemas/Money'` |
| `OperationDetail` | наследует `amount` через `allOf` → `OperationListItem` | `$ref: '#/components/schemas/Money'` (косвенно) |

## Где используется OperationListItem

| Схема / путь | Ссылка |
|---|---|
| `GET /v1/accounts/{accountId}/operations` → `200` | `items: $ref: '#/components/schemas/OperationListItem'` |
| `OperationDetail` | `allOf: - $ref: '#/components/schemas/OperationListItem'` |
| `GET /v2/accounts/{accountId}/operations` → `200` | `items: $ref: '#/components/schemas/OperationDetailV2'` (наследует `OperationListItem`) |

## Где используется OperationDetail

| Схема / путь | Ссылка |
|---|---|
| `GET /v1/operations/{operationId}` → `200` | `$ref: '#/components/schemas/OperationDetail'` |

## Где используется OperationDetailV2

| Схема / путь | Ссылка |
|---|---|
| `GET /v2/accounts/{accountId}/operations` → `200` | `items: $ref: '#/components/schemas/OperationDetailV2'` |

## Где используется ApplyDecisionRequest

| Схема / путь | Ссылка |
|---|---|
| `POST /v1/operations/{operationId}/apply-decision` → `requestBody` | `$ref: '#/components/schemas/ApplyDecisionRequest'` |

## Где используется Error / ErrorResponse

| Схема / путь | Ссылка |
|---|---|
| Все `4xx` / `5xx` ответы | `$ref: '#/components/schemas/ErrorResponse'` |
| `ErrorResponse.errors[]` | `items: $ref: '#/components/schemas/Error'` |

## Затронутые endpoints

| Endpoint | Метод | Затронут изменением Money? |
|---|---|---|
| `/v1/accounts/{accountId}/operations` | GET | Да (через `OperationListItem.amount`) |
| `/v1/operations/{operationId}` | GET | Да (через `OperationDetail` → `OperationListItem.amount`) |
| `/v1/operations/{operationId}/apply-decision` | POST | Нет (не использует Money) |
| `/v2/accounts/{accountId}/operations` | GET | Да (через `OperationDetailV2` → `OperationListItem.amount`) |

## Затронутые generated models

| Модель | Затронута изменением Money? |
|---|---|
| `OperationListItem` | Да (`amount`) |
| `OperationDetail` | Да (наследует `amount`) |
| `OperationDetailV2` | Да (наследует `amount`) |
| `SplitObject` | Нет (не использует Money) |
| `Money` | Да (сама схема) |
| `ApplyDecisionRequest` | Нет |
| `Error` | Нет |
| `ErrorResponse` | Нет |