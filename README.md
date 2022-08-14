# Weather Forecast
A simple weather checker that allows a user to know a specific city's weather. Built using Vue3, Vuex, JS, Tailwind, OpenWeatherMap API and Auth0.

## Code editor
```
The recommended editor is VS code. You can still use other editors. 
```

## VS Code Plugins
```
1. ESlint
2. Vetur
3. Prettier-ESlint
4. Prettier - (optional)
5. Auto Rename Tag
6. Tag Color Highlight
```

## VS Code Settings (Optional)
```
Configured on a user level. Will be provided once you have the repo setup. 
```


# Setup
- `npm install` - installs all modules that are listed on package


## Environment Variables
proceeds to .env.production when .env is not present

- `VUE_APP_WEATHER_API_KEY` - "" // an api key of the weather api used.
- `VUE_APP_WEATHER_API_URL` - "" // base url of the weather api used.
- `VUE_APP_AUTH0_DOMAIN` - "" // domain of the created application in auth0.
- `VUE_APP_AUTH0_CLIENT_ID` - "" // client id of the created application in auth0.


## Structure

- `assets` - contains all the resources like images, svgs, etc.
- `components` - contains the reusable components for the whole project.
- `router` - contains the route navigation file
- `store` - vuex store file (state management of the whole app)
- `views` - contains all the views of the whole project.
- `api` - abstraction for api calls


## Commands
- `npm run serve` - compiles and hot-reloads for development
- `npm run build` - compiles and minifies for production
- `npm run lint` - analyzes codes for potential errors
- `npm run lint -- --fix` - fixes lint errors


## Notes
```
ALWAYS UNCOMMIT package.lock.json to avoid module conflicts
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
