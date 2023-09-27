# Cypress API Test Automation Project with Cucumber BDD Framework

This repository contains a RESTful API test automation project built using [Cypress](https://www.cypress.io/) as the testing framework, [Cucumber](https://cucumber.io/) for Behavior-Driven Development (BDD) test scenarios for maintainability and scalability.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Generating Reports](#generating-reports)
- [Contributing](#contributing)

## Project Overview

This project is designed to showcase a test automation framework using Cypress, Cucumber, and the Page Object Model architecture. The goal is to provide a structured framework that makes it easy to write and maintain automated tests for web applications.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Node Package Manager
- [VS Code](https://code.visualstudio.com/) - Visual Studio Code is code editor (IDE)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/gurpreetskairon/cypress-bdd-api.git
```

2. Navigate to the project directory:

```bash
cd cypress-bdd-api
```

3. Install project dependencies:

a. cypress:

```bash
npm install cypress --save-dev
```

b. cucumber bdd framework:

```bash
npm install cypress-cucumber-preprocessor --save-dev
```

4. Configure project for Cucumber BDD framework:
   a. package.json
   Add the following lines at the end of package.json file:

```
,
  "cypress-cucumber-preprocessor": {
    "nonGlobalSpecDefinitions": true,
    "step_definitions": "cypress/e2e/steps"
  },
  "keywords":[
    "Cypress",
    "cucumber"
  ]
```

b. cypress.config.js
Replace the content of the file with the following text:

```
 const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/features/*.feature",
  },
});
```

## Project Structure

The project follows a structured layout to maintain clarity and scalability. Here's an overview of the key directories and files:

- `cypress/` - Contains Cypress-specific configurations and test files.
  - `e2e/` - Test scenarios written in Gherkin syntax using Cucumber.
  - `support/` - Custom Cypress commands and utility functions.
  - `plugins/` - Cypress plugins and additional configurations.
- `cypress-cucumber-json` - Configuration for JSON reports generation.
- `cypress-cucumber-html` - Configuration for HTML reports generation.
- `cypress.json` - Cypress configuration file.
- `package.json` - Project dependencies and scripts.
- `README.md` - This documentation.

## Writing Tests

1. Create new feature files in the `cypress/e2e/features` directory. Feature files should have a `.feature` extension and follow Gherkin syntax.

2. Write scenarios in feature files using Given-When-Then steps.

3. Create corresponding step definitions in the `cypress/e2e/steps` directory using JavaScript. These step definitions should implement the test actions and assertions.

4. Test data can be passed from files placed in the cypress/fixtures directory. For example, this project reads the base url from the config.json file placed int he fixtures directory.

5. Organize reusable utility functions in the `cypress/support` directory.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This command will execute the Cypress tests using the Cucumber plugin, which will read the feature files and execute the associated step definitions.

## Generating Reports

This project is configured to generate both JSON and HTML reports for test execution. Reports are generated in the `cypress/reports` directory. To generate the reports, run:

```bash
npm run generate:reports
```
