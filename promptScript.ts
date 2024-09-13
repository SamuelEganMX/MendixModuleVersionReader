import { MendixPlatformClient, setPlatformConfig } from "mendixplatformsdk";
import * as readline from 'readline';

async function getInput(prompt: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise<string>((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    // Display the information block with links
    console.log(`=== Mendix Module Version Reader ===
The purpose of this script is to read the versions of all the modules in a Mendix application.
This script leverages the Mendix Platform SDK and requires the following information to work:

- A Mendix Personal Access Token with the mx:modelrepository:repo:read permission: https://user-settings.mendix.com/link/developersettings
- Your app's App ID: https://sprintr.home.mendix.com/link/myapps, Select your app → Click on “Settings” (left side navigation) → find App ID under the 'General' tab
- The name of the branch to check
============================================
    `);

    // Prompt the user for input
    const mendixToken = await getInput('Enter your Mendix PAT: ');
    setPlatformConfig({
        mendixToken: mendixToken
    });
    const client = new MendixPlatformClient();
    const appID = await getInput('Enter your App ID: ');
    const app = await client.getApp(appID); // app ID
    const branchName = await getInput('Enter the branch name: ');
    const workingCopy = await app.createTemporaryWorkingCopy(branchName); // branch
    const model = await workingCopy.openModel();
    model.allModules()
        .filter(module => module.fromAppStore === true)
        .forEach(module =>
            console.log({
                name: module.name,
                appStoreVersion: module.appStoreVersion,
                appStoreGuid: module.appStoreGuid,
                appStoreVersionGuid: module.appStoreVersionGuid
            })
        );
}

main().catch(console.error);
