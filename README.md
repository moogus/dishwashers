# Dishwasher App [![Build Status](https://travis-ci.com/moogus/dishwashers.svg?branch=main)](https://travis-ci.com/moogus/dishwashers)

### [Travis CI](https://travis-ci.com/github/moogus/dishwashers)
![image](https://user-images.githubusercontent.com/4889659/107957152-19977300-6f98-11eb-954e-ed8b4095bcfc.png)

## Project structure
```bash
├── app               # application files
├── babelrc           # babel configuration required for testing
├── eslintrc.js       # eslint configuration
├── jest              # jest files
├── jest.conf.js      # jest configuration required for testing
├── package.json      # NodeJS dependencies and scripts
├── README.md         # This instructions file
├── travis.yml        # travis CI file
├── webpack.config.js # webpack configuration
```

## Getting started
### Requirements
* Node [v15](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V15.md#15.8.0)
* [Yarn](https://classic.yarnpkg.com/en/)
### Install the project
```sh
yarn
```
### Starting the project
```sh
yarn start
```
### Running tests
```sh
yarn test
```
This starts the project on http://localhost:3000/ api calls have been proxied to work locally to avoid [cors issues](https://www.npmjs.com/package/local-cors-proxy).

## Technologies used:
* [react](https://github.com/facebook/react)
* [redux](https://redux.js.org/)
* [styled components](https://styled-components.com/)
* [reach router](https://reach.tech/router/)
* [jest](https://jestjs.io/)
* [react testing library (RTL)](https://testing-library.com/)

## Used for Speed
* [bootstrap css only](https://getbootstrap.com/docs/3.4/getting-started/)

Bootstrap is the only 3rd party library used to gain quick styling.

## Work done
**I allowed one day (8 hours) for the challenge.**

The project has been built from scratch rather than using [react create app](https://reactjs.org/docs/create-a-new-react-app.html) or another framework set up.  

I've used [reach router](https://reach.tech/router/) for routing as it has a simple set up and provides an easy way to navigate from inside components.  

I've used redux with thunks for state management. I did consider [redux toolkit](https://redux-toolkit.js.org/), but the application needed very little state management. I haven't persisted the state. Custom hooks have been built to interact with redux rather then using connected components.

I have used styled components when there was a needed for custom css.  Any styled components are nested with the component they are used in.  I considered breaking out the styled components into their own folder to keep the code "DRY" but there was very little re-use.

I have used jest and RTL for testing.  I have written unit tests in each folder.  

The following tests cover the pages, and are more "integration" in style:
* [#app/components/GridPage/GridPage.spec.js](app/components/ProductPage/ProductPage.spec.js)
* [#app/components/ProductPage/ProductPage.spec.js](app/components/ProductPage/ProductPage.spec.js)

### Grid Page
![grid](https://user-images.githubusercontent.com/4889659/107943432-9e789180-6f84-11eb-9c24-deee4cd12421.png)

I've tried to match the design as much as possible and meet the requirements given.  I have aimed for a iPad grid working on portrait and landscape.  

### Product Page
![land-product](https://user-images.githubusercontent.com/4889659/107943506-b8b26f80-6f84-11eb-8e85-09b5940438e0.png)

I've attempted the Product page and have matched the format on portrait and landscape. I have not implemented the bottom half of the product page as per the designs (highlighted below).  This was due to a lack of time, instead I have taken the result of the api and shown the information without the collapsable behaviour.

![port-product](https://user-images.githubusercontent.com/4889659/107943547-c536c800-6f84-11eb-9b0d-b03e09300916.png)
