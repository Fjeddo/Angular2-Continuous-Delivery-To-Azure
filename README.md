# Angular 2 App - Continuous Delivery To Azure
This repo is an example showing how to continuously deploy an Angular 2 web application to an Azure Web App. The base for this repo comes from the repo here https://github.com/Fjeddo/Node-TypeScript-Continuous-Delivery-To-Azure.

##Step-by-step (commit-by-commit)
- All Angular 2 dependencies copied from package.json in the Angular 2 quickstart, https://angular.io/docs/ts/latest/quickstart.html. Here is [the code](https://github.com/Fjeddo/Angular2-Continuous-Delivery-To-Azure/tree/ecbb1f19f8448b844834d011ece92deed2cee17e).
- Typings config copied from the Angular 2 quickstart, the installation using npm invoked on deployment. Here is [the code](https://github.com/Fjeddo/Angular2-Continuous-Delivery-To-Azure/tree/aaeb5bb2f0b19d373aac391dbafd7e0b93a9c1ed).
- systemjs.config.js added, a clone of the Angular 2 quickstart version. Here is [the code](https://github.com/Fjeddo/Angular2-Continuous-Delivery-To-Azure/tree/76ab17cba1056b0a9deb65012f70bfe161fc0a8d).
- The Angular 2 app is added. **Note the reference to index.d.ts in main.ts.** This seems to be needed to make gulp transpile the Angular 2 without errors. Here is [the code](https://github.com/Fjeddo/Angular2-Continuous-Delivery-To-Azure/tree/163e1f099526545d76b376598ad28a1fcbae40b2).

##Done!
Now, if the deployment is correctly connected in the Azure Portal, the web application should deployed when pushing to the correct branch. Have a look at the web app in the example here http://angular2-cd.azurewebsites.net.

##Note
The code in the master branch is not working properly when adding routing to the Angular application. Have a look at the **routing branch** [here](https://github.com/Fjeddo/Angular2-Continuous-Delivery-To-Azure/tree/routing), where the key changes are made in server.js to correctly make the Angular app handle incoming requests.
