# Playwright E2E Test Automation Framework

This project is a comprehensive End-to-End test automation framework built with Playwright and JavaScript. It demonstrates best practices in automation by testing the popular demo e-commerce site, [Sauce Demo](https://www.saucedemo.com).

## ✨ Features

-   **Page Object Model (POM):** Code is structured using POM for better maintainability, readability, and reusability.
-   **Data-Driven:** User credentials are separated from test code and stored in JSON files.
-   **Cross-Browser Support:** Configured to run on Chromium, easily extendable to Firefox and WebKit.
-   **Parallel Execution:** Tests are configured to run in parallel to reduce execution time.
-   **HTML Reporting:** Generates a detailed HTML report with test results, traces, and screenshots upon failure.
-   **CI/CD Ready:** The framework is self-contained and can be easily integrated into any CI/CD pipeline like GitHub Actions.

## 🛠️ Tech Stack

-   **Test Runner:** [Playwright](https://playwright.dev/)
-   **Language:** JavaScript (Node.js)
-   **Design Pattern:** Page Object Model (POM)

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or higher)
-   npm (comes with Node.js)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone (https://github.com/Dineshk1324/playwright-portfolio.git)
    cd playwright-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

## 🏃‍♂️ How to Run Tests

### Run all tests in headless mode:

```bash
npm test
```

### Run all tests in headed mode (to watch the browser):

```bash
npm run test:headed
```

## 📊 View Test Reports

After running the tests, an HTML report is generated. To view it, run:

```bash
npm run report
```

This will open the report in your default browser.
