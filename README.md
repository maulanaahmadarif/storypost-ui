# monorepo-with-lerna-and-npm
CMD Web App

### Run below commands to make this code working

- ##### Install lerna globally 
`npm i -g lerna`
- ##### Install dependencies of this project. Note it will only install dependencies mentioned in root package.json file
`npm install`
- ##### Install dependencies for packages and create symlinks. Read more [here](https://github.com/lerna/lerna/tree/master/commands/bootstrap#readme)
`lerna bootstrap` 
- ##### To view the library, just go to library directory and run storybook command
`npm run storybook` 

Open http://localhost:9009 to view it in the browser.

- ##### To view individual projects, just go to packages directory, and choose one of the projects, and run start command
`npm run start` 

- ##### To transpile the library you have to run babel command in library directory
`npm run build-lib` 
