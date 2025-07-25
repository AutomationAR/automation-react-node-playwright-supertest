## What is Being Tested

- React frontend functionality (UI interactions)
- Node.js API endpoints (auth + CRUD)

## Test Coverage

- Login success/failure
- Add/Edit/Delete item
- Full API contract (positive + negative)

## Tools Used

- Playwright (UI Automation)
- Supertest + Jest (API)
- GitHub Actions (CI/CD)

## How to Run Tests

1. Start backend: `cd backend && npm install && npm run dev`
2. Start frontend: `cd frontend && npm install && npm start`
3. Run UI tests: `npx playwright test`
4. Run API tests: `cd backend && npm test`

## Assumptions

- JWT token is fake (simplified auth)
- No DB is used (in-memory)

## Limitations

- No persistent storage
- Auth is hardcoded