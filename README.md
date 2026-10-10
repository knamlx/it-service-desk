# Сервис заявок ИТ-отдела

Учебный проект с Flask API, Angular frontend и MySQL-хранилищем.

## Требования

- Git
- Python 3.10+
- Node.js 24.x
- MySQL 8.4 для режима постоянного хранения

## Backend

Создайте виртуальное окружение и установите зависимости:

```powershell
python -m venv backend/.venv
.\backend\.venv\Scripts\python.exe -m pip install -r backend/requirements-dev.txt
```

Для режима памяти в `backend/.env` укажите:

```text
STORAGE=memory
```

Для MySQL создайте базу по `database/schema.sql` и `database/seed.sql`, затем укажите параметры:

```text
STORAGE=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=service_desk
DB_USER=service_desk_app
DB_PASSWORD=your_password
```

Запуск API:

```powershell
cd backend
.\.venv\Scripts\python.exe -m flask --app app:create_app run --debug --port 5000
```

Проверка backend:

```powershell
cd backend
.\.venv\Scripts\python.exe -m pytest -q
```

## Frontend

Установка и запуск:

```powershell
cd frontend
npm ci
npm start
```

Angular запускается на `http://localhost:4200` и проксирует `/api/**` на Flask
`http://127.0.0.1:5000`.

Проверка frontend:

```powershell
cd frontend
npm test -- --watch=false
npm run build
```

## E2E

Для браузерных проверок должны быть запущены MySQL, Flask и Angular.

```powershell
cd e2e
npm ci
npx playwright install chromium
npm test
```

Не публикуйте `.env`, пароли, `node_modules`, виртуальное окружение и резервные копии.

