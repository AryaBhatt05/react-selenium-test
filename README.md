# React Selenium Test Project

## Overview
End-to-End (E2E) testing of a React application using **Selenium WebDriverJS**, **Mocha**, and **Chai**, integrated with **Jenkins**.

---

## Project Structure
react-selenium-test/
├── e2e/ # Selenium test cases
├── reports/ # Test reports
├── src/ # React app source
├── package.json
├── package-lock.json
├── Jenkinsfile # Jenkins pipeline
└── README.md


---

## Setup & Run

1. Clone the repo:
```bash
git clone https://github.com/AryaBhatt05/react-selenium-test.git
cd react-selenium-test

2. Install dependencies:
```bash
npm install

3. Run tests locally:
```bash
npm start       # Start React app
npx wait-on http://localhost:3000 && npm run e2e

Jenkins Pipeline

Checkout code from GitHub

Install dependencies

Start React app

Run Selenium E2E tests

Publish JUnit test reports