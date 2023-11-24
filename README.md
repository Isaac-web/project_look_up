# [LookUp]

LookUp is a flight booking application made for educational and practice purposes. Keep in mind that there is no connection to any of real flight databases or so on.

### Tech

The project is built with node.js v12.22.12

LookUp uses technologies listed below to work correctly:

- [Node.js]
- [ReactJS]
- [Typescript] on the client
- [Javascript] on the backend server
- [SCSS]
- RWD

##### Packages

Also, thanks to their authors, I could use the packages from npm listed below to make development a bit fastier. Nevertheless - for the record - the packages were used only to upgrade aesthetic layer of the app in order to achieve the intended effect while rationalizing the time available for the project.

\*\*Frontend

- [React Zoom Pan Pinch]
- [React CSS Transition Group]
- [React Icons]
- [React Toastify]
- [React Loader Spinner]

\*\*Backend

- [Express.js]
- [Mongoose]
- [config]
- [cors]

### Installation

To run the project locally you have to install the dependencies in both the frontend and the backend and start them separately. So in the application's root directory run the following:

## Frontend

```sh
$ cd project_look_up_frontend
$ npm install
$ npm start
```

Frontend will run on [http://localhost:3000/].

## Backend

```sh
$ cd project_look_up_backend
$ npm install
$ npm start
```

Application Server will run on [http://localhost:5000/].

_Ensure you are using node.js ^12.22.12_

# Testing

Automated test for the current status of the project is only written for the **backend**. Tests are writting with `mocha`, `chai` and `chai-http`.
No automated tests for the frontend yet.

To test the backend project from the root folder, run the following:

```sh
	$ cd project_look_up_frontend
	$ npm test
```

The backend project needs more test coverage.

### Status

Project finished and stable.

### Contact

Designed and developed by [Lucas Mecfal](mailto:kanytakiy@gmail.com). Feel free to contact me :)

[LookUp]: https://look-up.netlify.app/
[ReactJS]: https://reactjs.org/
[Typescript]: https://www.typescriptlang.org/
[ES6]: http://www.ecma-international.org/ecma-262/6.0/
[SCSS]: https://sass-lang.com/
[React Zoom Pan Pinch]: https://www.npmjs.com/package/react-zoom-pan-pinch/
[React CSS Transition Group]: https://www.npmjs.com/package/react-addons-css-transition-group/
[React Icons]: https://www.npmjs.com/package/react-icons/
[React Toastify]: https://github.com/fkhadra/react-toastify/
[React Loader Spinner]: https://www.npmjs.com/package/react-loader-spinner/
[http://localhost:3000/]: http://localhost:3000/
