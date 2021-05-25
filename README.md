Have n columns of user-configurable background color.

It uses Flow for some static type hinting.

## Commands

* `yarn start` - run the application in development mode
* `yarn build` - build production. Set `homepage` in `package.json`
* `yarn transfer` - rsync the build folder. Set `deploy_path "myserver:/where/you/want/it"` in `.yarnrc`
* `yarn deploy` - build + transfer in one command
