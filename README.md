# TS-RestAPI

Simple NodeJS HTTP server to simulate a real time chat application using websockets, from socket.io. Written using TypeScript.

## Project setup:
Install typescript node packages globally.

> npm install -g typescript ts-node

Start node project.

> npm init

Install dependencies

> npm install -s @types/express express @types/socket.io socket.io

If you clonned the repository, it should work only ith **npm install** inside it.

Create tsconfig.json
The objective of this file is to create JS files in the dist directory from the TS files which we will be storing in the lib directory.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "moduleResolution": "node",
    "pretty": true,
    "target": "es6",
    "outDir": "./dist",
    "baseUrl": "./lib"
  },
  "include": ["lib/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Edit scripts in package.json to improve the development experience

```json
"scripts": {
      "build": "tsc",
      "dev": "ts-node ./lib/server.ts",
      "start": "nodemon ./dist/server.js",
      "prod": "npm run build && npm run start"
  }
```

You must edit the config according to your settings on the file **lib/config/app.ts**!

Start development server:

> npm run dev

Start production server:

> npm run prod

## About the Application:
It is a very simple application, which means that a lot of things has to be added in order to make it usable. Some ideas for future features are:
* A beautiful CSS style.
* Authentication system.
* Message storing via MongoDB or similar.
* User identification (it is an anonymous application currently).
* Send messages when pressing ENTER key.
* Clean text box when a message is sent.
* Do not send the message if the text box is empty.

Anything more? Feel free to contact me!

## Sample GIF:
Click [here](https://i.imgur.com/EZ5D4za.gif) if you can't see it clearly.

![Alt Text](https://i.imgur.com/EZ5D4za.gif)