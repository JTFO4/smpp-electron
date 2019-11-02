# Stock Market Projection Predictor - built on [Electron](https://electronjs.org/)

# Development Environment Setup
Install [NodeJS](https://nodejs.org/en/) >= **v10.9.0**. Run `node -v` in a terminal to check which version you have.

Install the [Angular CLI](https://angular.io/guide/setup-local) >= **v8.3.17**. Run `ng version` in a terminal to check which version you have.
> * Angular requires an npm package manager to be installed. This is typically automatically installed with NodeJS. To check whether you have npm installed, run `npm -v` in a terminal.
> * If a `running scripts is disabled on this system` error is thrown while running `ng` commandscan be resolved by running `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted` in a terminal.

### Usage notes for npm
Run `npm install pkg-name` to install dependencies for SMPP.
Run `npm update` to automatically update and install all dependencies (even missing ones) for SMPP.

# Development Notes
## [Angular](https://angular.io)
### Server
Run `ng serve` from the root folder of the SMPP project in a terminal to launch a local development server. Navigate to `http://localhost:4200/` in your browser (Google Chrome preferred) to view the app. Changing source files while running a development server will automatically reload the app with new changes.
> Running `ng serve --open` will automatically open the development server in a browser window. You will automatically be routed to `http://localhost:4200/`.

### Components
Run `ng generate component component-name` to generate a new component.
Run `ng generate directive directive-name` to generate a new directive.
Run `ng generate pipe pipe-name` to generate a new pipe.
Run `ng generate service service-name` to generate a new service.
Run `ng generate class class-name` to generate a new class.

### Unit Testing
Run `ng test` to run spec tests for components.

### Help
Run `ng --help` to view help for Angular development. See the official documentation [here](https://github.com/angular/angular-cli/blob/master/README.md).