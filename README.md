Project Setup & WebdriverIO Installation
Step 1 - Crate a new folder and open it in IDE (VS Code)
Step 2 - Open terminal in VS Code and run a commanss:
npm init -y
npm init wdio
Step 3 - Select the options as required and Installation
Step 4 - Check WebdriverIO version
npm ls webdriverio
Step 5 - Check wdio.conf.js file and project folders are created
Step 6 - To run the existing tests
Run all tests in the folder configured in wdio.conf.js
npx wdio run .\wdio.conf.js or npm run wdio
Run specific tests 
npx wdio run wdio.conf.js --spec test.e2e.js

How to create a tests
Step 1 - Create a new file under spec folder
Step 2 - Add the test script using it block (Mocha)
npx wdio run wdio.conf.js --spec .\test\specs\test1.e2e.js
$() - to find single element
$$() - to find multiply elements

How to create reports
Step 1 - Run
npm install @wdio/allure-reporter --save-dev
Step 2 - Add reporter config in wdio.conf.js
Step 3 - Run test and check Allure Results folder is generated
Step 4 - Install allure command line tool 
npm install -g allure-commandline --save-dev
npm install i allure-commandline --save-dev
Step 5 - Run Allure reporter
allure generate allure-results // this generates allure-report folder
allure open // will start server and open report

GitHub connection
git init
git remote add origin https://github.com/lupusludensest/web_driver_io_12_jan_2025.git
git add .
git commit -m "dt 12 jan 2025"
git push -u origin main
git status
git pull

How to implement Page Object Model

Step 1 - Create a class for each Page
Step 2 - Create locators of all objects to be used in that Page
Step 3 - Create methods or actions to be performed on the objects
Step 4 - Refer in the test scripts

How to RECORD WebdriverIO test
Step 1 - Open any website in Chrome browser, do a Right-Click and select "Inspect"
Step 2 - To open Recorder panel - Click on More Options/Three dots > More Tools > Recorder
OR Click on More Options/Three dots . Run Command > Show Recorder 
Step 3 - Click on "Start new Recording" > give your test a name and then use the browser to record test
Step 4 - Stop recording @ click on "Replay" to check if the recording was succesful
Step 5 - Can Slowdown replay | Simulate network | Measure performance | Add Remove Edit Steps | Edit Locators
