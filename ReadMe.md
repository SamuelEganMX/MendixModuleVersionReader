# Mendix Module Version Reader

The purpose of this script is to read the versions of all the modules in a Mendix application.
This script leverages the Mendix Platform SDK and requires the following information to work:

- A Mendix Personal Access Token with the mx:modelrepository:repo:read permission: https://user-settings.mendix.com/link/developersettings
- Your app's App ID: https://sprintr.home.mendix.com/link/myapps, Select your app → Click on “Settings” (left side navigation) → find App ID under the 'General' tab
- The name of the branch to check

## Prerequisites

Before you can use this project, ensure you have the following installed on your system:

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [TypeScript](https://www.typescriptlang.org/)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/SamuelEganMX/MendixModuleVersionReader.git
    cd MendixModuleVersionReader
    ```

2. **Install dependencies:**

    In the root directory of the project, run the following command to install the necessary Node.js packages:

    ```bash
    npm install
    ```

## Compiling TypeScript to JavaScript

This project is written in TypeScript and must be compiled to JavaScript before running. To compile the TypeScript code:

1. **Compile the TypeScript files:**

    Run the following command to compile the TypeScript files to JavaScript:

    ```bash
    tsc
    ```

## Running the Script

1. **Running the compiled JavaScript:**

    After compiling the TypeScript files, you can run the generated JavaScript file using Node.js. To run the script:

    ```bash
    node promptScript.js
    ```

2. **Follow the Prompts:**

    The script will prompt you for the following inputs:
    - Mendix token
    - App ID
    - Branch name

3. **Output:**

    Once you provide the necessary inputs, the script will retrieve and display information about the app's modules that are from the Mendix App Store, including:
    
    - Module name
    - App Store version
    - App Store GUIDs