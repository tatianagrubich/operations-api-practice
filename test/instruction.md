## Убедитесь, что у вас установлены и работают следующие инструменты:
1. Node.js и npm (нужны для npx и генераторов):

node -v
npm -v

2. Java (JDK 17 или выше) (нужна для запуска openapi-diff и мок-сервера):

java -version

3. Maven (нужен для запуска мок-сервера Spring Boot):

mvn -v

4. Python 3.x (нужен для Schemathesis):

python --version

5. Установка Schemathesis:

pip install schemathesis

## Контрактное тестирование (Contract Testing)
Цель: Проверить, что сгенерированный по YAML сервер отвечает так, как описано в контракте.

1. Генерируем мок-сервер (Spring Boot)
npx @openapitools/openapi-generator-cli generate -i api/openapi.yaml -g spring -o mock-server
(Дождитесь завершения. В папке появится директория mock-server).

2. Запускаем мок-сервер
Перейдите в папку и запустите его:

cd mock-server
mvn spring-boot:run

# Если Maven не установлен, используйте встроенный скрипт:
Windows: mvnw.cmd spring-boot:run
Mac/Linux: ./mvnw spring-boot:run

Важно: Дождитесь в логе сообщения Started Application in X seconds. Не закрывайте этот терминал! Мок-сервер должен работать.

3. Запускаем Schemathesis (в новом терминале)
Откройте новое окно терминала (не закрывая мок-сервер). Вернитесь в корень проекта (где лежит api/openapi.yaml) и выполните:

PYTHONUTF8=1 PYTHONIOENCODING=utf-8 schemathesis run api/openapi.yaml --url http://localhost:8080/api/banking/v1 --checks all --no-color


## Кодогенерация (Codegen Smoke Test)
Цель: Проверить, что из YAML генерируется «чистый» код без мусорных Inline-классов.

1. Генерируем Java-клиент
(Можно выполнять в любом терминале, мок-сервер уже не нужен).

npx @openapitools/openapi-generator-cli generate -i api/openapi.yaml -g java -o generated

2. Ищем мусорные классы
ls generated/src/main/java/org/openapitools/client/model/ | grep "Inner"

## Обратная совместимость (Breaking Changes)
Цель: Проверить, что удаление поля merchantName — это Breaking Change (ломает старых клиентов).

1. Скачиваем openapi-diff
Если у вас нет этого файла, скачайте его через curl:

curl -L -o openapi-diff-cli.jar https://repo1.maven.org/maven2/org/openapitools/openapidiff/openapi-diff-cli/2.1.0/openapi-diff-cli-2.1.0-all.jar
(Если curl не работает, скачайте файл вручную через браузер и положите в корень проекта).

2. Убеждаемся, что есть два файла для сравнения
old.yaml
new.yaml

3. Запускаем сравнение

java -jar openapi-diff-cli.jar old.yaml new_broken.yaml
