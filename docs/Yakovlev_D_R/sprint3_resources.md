GET /v1/operations/{operationId} — получить операцию. В ответе хранится scoringRef, если скоринговое решение существует, и опциональный блок posting.

POST /v1/operations/search?page={page}&pageSize={pageSize} — поиск операций. В теле запроса: массив accountIds, диапазон дат, статус, продавец. В результатах возвращается опциональный блок posting.

GET /v1/operations?ids=1,2,3 — получить операции по известным идентификаторам.

GET /v1/operations/{operationId}/scoring-decision — сервис находит scoringRef у операции и запрашивает решение через API Scoring. Если ссылки нет, решения у операции нет

GET /v1/accounts/{accountId}/operations — получить список операций по счёту

GET /system/v1/postings/stream?eventId={eventId}&limit={limit} — поток проводок для антифрода. eventId задаёт позицию чтения, а limit — максимальное число возвращаемых событий


