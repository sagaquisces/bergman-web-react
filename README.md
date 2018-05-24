# Lisa Bergman :: Pianist and Producer
## Requirements
This project was developed in React and Redux since it is a current solution for building from the ground up with scalability in mind.

For development, Node.js and Yarn installed on your environment.

### Node

[Node](http://nodejs.org/) is really easy to install includes [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v8.7.0

    $ npm --version
    6.0.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

### Yarn installation

Please install the yarn CLI if you don't have it already: [Yarn install](https://yarnpkg.com/lang/en/docs/install/) will take you to the appropriate installer method for your operating system.

---

## Install

    $ git clone https://github.com/sagaquisces/bergman-web-react
    $ cd bergman-web-react
    $ yarn install

### Configure Firebase Backend

[Firebase](https://firebase.google.com/) is a mobile and web application development platform, featuring a NoSQL cloud database that stores data in Javascript Object Notation (JSON) format. In order to get a development version that will enable you to create, update and delete data:

- sign up for a Firebase account, if you don't already have one
- setup a development database in Firebase for this project
- enable email authentication for the Login feature

#### Sign up

Go to the [Firebase](https://firebase.google.com/) and sign up for an account if you don’t already have one. You can log in with a Google account for easy access.

#### Set up development database

When you log in, you should be directed to the Firebase console. Create a new one by clicking the blue CREATE NEW PROJECT button.

Give your new project a name.

Once you create your project, you’ll be redirected to your project’s console overview. If you check the URL at the top of your browser, you’ll see something like `https://console.firebase.google.com/project/talks-you-should-watch/overview`, where the part of the URL after `/project/` matches your project’s name.

Under the large text that says "Get started here", you'll see three icons, with the final one saying "Add Firebase to your web app". Click it.

A modal entitled "Add Firebase to your web app" will appear. Copy the key/value pairs associated with the `config` object. You will need to uncomment `src/constants/firebaseConfig.sample.js` and paste those key/value pairs into the corresponding placeholders in the config object. **IMPORTANT** Rename this file --> `src/constants/firebaseConfig.js` Do all that now before proceeding so you have them. I'll wait...

On the left of the Firebase overview page, there should be a sidebar. Under "DEVELOP", find "Database" and click on that.

You have two choices to choose from; choose "Get Started" from "Realtime Database", and when the modal appears, choose "Start in test mode", then "Enable." A window to your data will open and this is where you will soon dynamically see updates to your data. **You can always reach this portal via the sidebar menu, though you may have to repeat the above to get there until the database is populated**.

#### Enable Email Authentication

Only authenticated users can create, update and delete events from the website. That is why the website has a login feature.

From the left sidebar, choose "Authentication", then "SET UP SIGN-IN METHOD" from card that appears.

You'll find a list of sign-in providers. Choose the first one: "Email/Password". Move the top "Enable" slider (we DO NOT want passwordless sign-in). Once that turns from gray to blue, click "Save". If "Email/Password" now says "Enabled", you are set

## Start & watch

    $ yarn start

## Simple build for production

    $ yarn build


---

## Languages & tools

### JavaScript

- [ESLint](https://eslint.org/) is used to check for JavaScript errors.
- [Webpack](https://webpack.js.org/) to bundle client-side scripts.
- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [W3.css](https://www.npmjs.com/package/w3-css) is used to write responsive CSS that looks great on a variety of platforms).

### Static server with Webpack DevServer

Each time you start the app, you get automatic refresh in the browser whenever you update a file.