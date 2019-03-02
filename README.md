# Dnd

The goal of this project is to provide a one stop shop for my players to get schedule updates and journal entries of past games. Currently a data base and middleware hasn't been created and styles have yet to be fully implemented.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Current build is for dnd.heatherflux.com to build for this app run
`
ng build --prod --base-href https://dnd.heatherflux.com
`
This build is monitored on the website with a post-receive.git file so that when an update occurs I can push it up to the site easily by `git push live`. This is as opposed to tunneling in and copying everything myself.

Don't forget to add live in remote. `git remote add live user@site.com` then verify with 'git remote -v'.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
