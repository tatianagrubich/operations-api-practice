# Git-флоу для практик тем 3–4

Этот документ описывает, как участники работают с репозиторием `operations-api-practice` на занятиях по Теме 3 (ресурсное моделирование) и Теме 4 (OpenAPI Governance и управление изменениями): какие ветки используются, как фиксировать изменения, как собирается итоговый контракт и как настроить авторизацию для `git push`.

---

## 1. Ветки

| Ветка | Назначение | Кто работает |
|---|---|---|
| `main` | Итоговая ветка. Сюда сливаются результаты обеих групп после review | Ведущий / Tech Lead |
| `feature/team-a` | Ветка Группы 1 (Продуктовый контур) | Участники Группы 1 |
| `feature/team-b` | Ветка Группы 2 (Платформенный контур) | Участники Группы 2 |

**Правило:** участники не пушат напрямую в `main`. Все изменения идут через ветку своей группы, затем — через Merge Request.

---

## 2. Работа внутри группы

### 2.1. Первый запуск

1. Клонируйте репозиторий (см. README, Шаг 4).
2. Переключитесь на ветку своей группы:

   ```bash
   git checkout feature/team-a   # или feature/team-b для Группы 2
   ```

3. Получите актуальные изменения:

   ```bash
   git pull origin feature/team-a
   ```

### 2.2. Ежедневный цикл

Перед началом работы получите последние изменения:

```bash
git pull origin feature/team-a
```

Внесите изменения в файлы спецификаций или документации.

Проверьте, что изменилось:

```bash
git status
git diff
```

Добавьте измененные рабочие артефакты в индекс:

```bash
# Для Темы 3 (Проектирование ресурсов):
git add docs/sprint3_resources.md

# Для Темы 4 (Управление изменениями и ИБ):
git add api/openapi.yaml docs/sprint4_impact.md docs/sprint4_security_transform.md
```
# или git add . — если нужно добавить все изменения одновременно

Зафиксируйте изменения:

```bash
git commit -m "<коммит в соответствии с тем, который указан в практическом работе>"
```

Отправьте изменения в удалённую ветку:

```bash
git push origin feature/team-a # или feature/team-b для Группы 2
```

### 2.3. Если несколько участников работают одновременно

Перед push сделайте rebase, чтобы избежать лишних merge-коммитов:

```bash
git pull --rebase origin feature/team-a
```

Если возникли конфликты:
1. Откройте конфликтующие файлы, разрешите конфликты вручную.
2. Добавьте исправленные файлы:
   ```bash
   git add <файлы>
   ```
3. Продолжите rebase:
   ```bash
   git rebase --continue
   ```
4. Повторите push:
   ```bash
   git push origin feature/team-a
   ```

**Совет:** если несколько человек работают над одним файлом, договоритесь, кто редактирует его в первую очередь, чтобы уменьшить количество конфликтов.

---

## 3. Сборка итогового контракта

### 3.1. Кто отвечает

В каждой группе выбирается Tech Lead (ответственный за группу). Его задачи:
- следить, что все участники пушат в ветку группы;
- проводить первичное review изменений;
- создавать Merge Request в `main`;
- участвовать в финальной защите контракта на зачетных занятиях.

### 3.2. Порядок слияния

Tech Lead группы убеждается, что ветка `feature/team-a` (или `feature/team-b`) содержит все нужные изменения:

```bash
git checkout feature/team-a
git pull origin feature/team-a
```

Tech Lead создаёт Merge Request из `feature/team-a` в `main`:
- на GitHub: Pull requests → New pull request;
- base: `main`, compare: `feature/team-a`;
- в описании указать: какие артефакты добавлены, какие ИБ-проверки и FLK-Quality Gates пройдены.

Ведущий проводит review:
- проверяет контракт на соответствие REST-семантике, лимитам payload и корпоративному стандарту;
- проверяет, что `swagger-cli validate` и `spectral lint` проходят без ошибок;
- оставляет комментарии в Merge Request.

После review Tech Lead вносит правки (если нужны), затем MR сливается в `main`.

Если обе группы работают с одним и тем же `api/openapi.yaml`, слияние в `main` происходит последовательно: сначала одна группа, затем вторая. Конфликты разбора сплит-моделей в Теме 4 разрешает Tech Lead второй группы совместно с ведущим.

### 3.3. Что считается итогом

**Итогом выполнения Темы 3 считается:**
- Единый спроектированный файл `api/openapi.yaml` в ветке `main`, успешно проходящий базовый синтаксический синтаксис.

**Итогом выполнения Темы 4 считается единый контракт `api/openapi.yaml` в ветке `main`, который:**
- Прошёл `swagger-cli validate` (структура корректна);
- Прошёл `spectral lint` без ошибок уровня `error` по всем правилам ФЛК и ИБ (включая проверку `maxLength`, `minimum/maximum` и паттерны маскирования счетов);
- Прошёл codegen smoke test (модели генерируются без ошибок компиляции);
- Прошёл peer/expert review и защищен перед группой;
- Сопровождается заполненными аналитическими файлами влияния `docs/sprint4_impact.md` и security-матрицей.

---

## 4. Права доступа и авторизация

### 4.1. Права на запись

Все участники получают роль Collaborator в едином репозитории курса `tatianagrubich/operations-api-practice`.

Права выдаёт ведущий до занятия. Без роли Collaborator `git push` вернёт ошибку `403 Forbidden`.

### 4.2. Авторизация для push

GitHub не принимает обычный пароль для `git push`. Нужен Personal Access Token (PAT) или SSH-ключ.

#### Вариант А: Personal Access Token (рекомендуемый)
1. Откройте GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic).
2. Нажмите Generate new token (classic).
3. Укажите:
   - Note: `operations-api-practice`;
   - Expiration: 30 дней (или на срок практики);
   - Scopes: `repo` (полный доступ к репозиториям).
4. Нажмите Generate token и скопируйте токен (он показывается один раз).

При `git push` введите:
- Username: ваш GitHub-логин;
- Password: вставьте скопированный PAT (не обычный пароль).

Чтобы не вводить токен каждый раз, настройте credential helper:
```bash
# Windows
git config --global credential.helper manager

# macOS
git config --global credential.helper osxkeychain

# Linux
git config --global credential.helper store
```

#### Вариант Б: SSH-ключ
Сгенерируйте ключ:
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```
Добавьте ключ в ssh-agent:
```bash
eval "\$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```
Скопируйте публичный ключ:
```bash
cat ~/.ssh/id_ed25519.pub
```
Откройте GitHub → Settings → SSH and GPG keys → New SSH key, вставьте ключ.

Проверьте подключение:
```bash
ssh -T git@github.com
```
Если репозиторий клонирован по HTTPS, переключите remote на работу через SSH:
```bash
git remote set-url origin git@github.com:tatianagrubich/operations-api-practice.git
```

### 4.3. Если push не проходит

| Ошибка | Причина | Решение |
|---|---|---|
| `403 Forbidden` | Нет прав Collaborator | Обратиться к ведущему курса |
| `Authentication failed` | Используется пароль вместо PAT | Сгенерировать PAT и ввести его в поле ввода пароля |
| `Permission denied (publickey)` | SSH-ключ не добавлен в GitHub | Добавить ключ в Settings → SSH keys |
| `Updates were rejected` | В удалённой ветке есть новые коммиты | Выполнить команду `git pull --rebase origin feature/team-a` |

---

## 5. Чек-лист перед push

□ Я на ветке своей группы (`git branch` показывает `feature/team-a` или `feature/team-b`).
□ Я получил последние изменения (`git pull --rebase origin feature/team-a`).
□ Я добавил актуальные файлы текущего спринта в staging (`docs/sprint3_*.md` или `api/openapi.yaml` + `docs/sprint4_*.md`).
□ Коммит-сообщение соответствует изменениям и содержит префиксы `docs:` или `feat:`.
□ Команда `git push origin feature/team-a` прошла успешно без ошибок аутентификации.