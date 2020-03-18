# nextjs-boilerplate

<!-- vscode-markdown-toc -->
* [About](#About)
* [Features](#Features)
* [Using this boilerplate](#Contributing)
* [Setup & Documentation](#SetupDocumentation)
* [Docker Compose for development](#DockerCompose)
* [Deploying on Production](#DeployingonProduction)
	* [Directly run](#Directlyrun)
	* [Docker in Production](#Dockersupport)
* [Advance](#Advance)
	* [Storybook](#Storybook)
	* [VR-testing (visual regression testing)](#VR-testingvisualregressiontesting)
		* [Debug visual regression test](#Debugvisualregressiontest)

## <a name='About'></a>About

🚀 A well-structured production ready modern web application boilerplate (Single Page Application with Server Side Render to boost SEO). With Next.js, React, Redux, Express.js, Less, Axios, Request Caching, EnvConfig, Storybook and more 🚀

## <a name='Features'></a>Features

This project provides a lot of features out of the box. Here's an overview of the included components and tools.

- **Next.js** - Minimalistic framework for single page with server-rendered React applications.
- **React** - Awesom library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
- **Redux** - A predictable state container for JavaScript apps.
- **Express.js**- A minimal and flexible Node.js web application framework that handles server-side rendering and integrates with Next.js.
- **Less** - CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.
- **Axios** - Promise based HTTP client. Integrated with axios-cache-adapter to cache the reponse to improve performance
- **Docker** - A tool designed to make it easier to create, deploy, and run applications by using containers.
- **Jest** - Javascript testing framework , created by developers who created React.
- **Storybook** - An open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient
- **Babel** - The compiler for next generation JavaScript.
- **ESLint** - The pluggable linting utility.
- **Bundler Analyzer** - Visualize the size of webpack output files with an interactive zoomable treemap.
- **Jest** - Javascript testing framework , created by developers who created React.
- **dotenv** - Expose environment variables to the runtime config
- **js-cookie** - Helpers to Save and access cookies / used to store token.

<br/>

## <a name='Contributing'></a>Contributing
### 1. Documenting

  - All The Components that need to be documented should be added in `visual-components` directory
  - Add `propTypes` and `defaultProps` to display props documentation
  - Description can be added by adding a comment in MarkDown Format on top of component
  - In `visual-components/[component-name]/stories/[story-name].story.jsx` export a `const test` with sample props
      ```
        export const test = {
          prop1: value1
        }
      ```
  - Check the `footer` component in `visual-components/footer`
  
### 2. Making Api Calls

  - Update Api Url in `src/config/env-config.js` Or in `/.env` file.
  - Use Axios Base Instance from `services/utils/Api.js`
  - store JWT is Cookies using `js-cookie` package or use helpers defined in `Api.js`

3. For a mixed frontend-backend project Api routes can be added in `src/server` directory

## <a name='SetupDocumentation'></a>Setup & Documentation

1. Clone the repository:

```
git clone https://github.com/mckinley-and-rice/nextjs-boilerplate.git
```

2. Install the dependencies:

```
yarn install (or npm install if you prefer npm, remember to remove yarn.lock first)
```

3. Start the development server:

```
yarn dev
```

### <a name='DockerCompose'></a>Running with docker compose in dev

1. Install Dependencies
```
docker-compose run next npm install
```

2. Run only Next App

```
docker-compose up next
```
- Add -d to run in background

3. Run Next app with storybook(Docs)

```
docker-compose up
```
- Add -d to run in background

4. Checking Logs
```
docker-compose logs -f next
```

Launch http://localhost:3001

(Change .env file for customize host and port)

## <a name='DeployingonProduction'></a>Deploying on Production

### <a name='Directlyrun'></a>Directly run

1. Build with production optimization

```
yarn build
```

2. Just Start

```
yarn start
```

### <a name='Dockersupport'></a>Docker support

You can build and run production with docker

1. Build docker image

```
docker build . -t nextjs-boilerplate
```

2. Run it with your prefer port

```
docker run -d -p 3001:3001 nextjs-boilerplate
```

## <a name='Advance'></a>Advance

### <a name='Storybook'></a>Storybook

1. Start the storybook:

```
yarn storybook
```

Launch http://localhost:9090

### <a name='VR-testingvisualregressiontesting'></a>VR-testing (visual regression testing)

0. Start storybook

Follow above step

1. Start Selenium of web drivers

```bash
docker run --name storybook-wdio-chrome -d -p 4444:4444 -p 5900:5900 selenium/standalone-chrome-debug
```

if error `Bind for 0.0.0.0:5900 failed: port is already allocated` comes, you can change that port to other number, like 5901 (`docker run --name storybook-wdio-chrome -d -p 4444:4444 -p 5901:5900 selenium/standalone-chrome-debug`)

2. Run test

**Desktop**

```bash
yarn vr-test:chrome src/components/<component-name>/stories/vr-test/index.spec.ts
```

**Smartphone**

```bash
yarn vr-test:chrome:sp src/components/<component-name>/stories/vr-test/index.spec.ts
```

**Both Desktop and Smartphone**

```bash
yarn vr-test src/components/<component-name>/stories/vr-test/index.spec.ts
```

**Run all tests**

```bash
yarn vr-test
```

#### <a name='Debugvisualregressiontest'></a>Debug visual regression test

##### Mac

**Screen Sharing**

To debug visual regression testing

1. Open the `Screen Sharing`

```bash
Hostname: YOUR_MACHINE_IP:5900 (normally 127.0.0.1)
Password: secret
```

2. Run test
3. Navigate to `Screen Sharing` to see the step by step for running the test