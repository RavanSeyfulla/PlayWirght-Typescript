## Playwright using Typescript

I have used Open Cart automation Labs to automate tests using Playwright.

[Please click here for Reference](https://naveenautomationlabs.com/opencart/)

## Get Started

- Install VS Code and Node.js
- Clone this repository
- Run "npm i install" to install dependencies

## Specifications:

- Playwright [Version 1.35.0]
- Typescript
- Page Object Model structure
- Fixtures for test inputs
- API and UI validations
- User Credentials passed through Github Secrets


## How to Run Tests:

- Run all tests "npx playwright test"
- Run a specific test "npx playwright test tests/login.spec.ts"
- Run in headless mode (default) "Run in headless mode (default)"
- Run with browser UI (headed mode) "npx playwright test --headed"
- Show test report "npx playwright show-report"

## CI/CD

- Integrated Github Actions
- Automatically runs tests on:
	•	Push to main branch
	•	Pull requests
