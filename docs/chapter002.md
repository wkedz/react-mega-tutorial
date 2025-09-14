# Chapter 2 Hello, React!

## Create a Starter React project.

Prefered way of creating new single-paged react application is to execute `npx create-react-app react-microblog`

The `npx` comes together with `npm` while installing node.js. Its purpose it to execute package on fly. So, above instruction will execute `create-react-app` with argument `react-microblog`.

This instruction will create:

* `README.md` - short document with instructions on how to use React project.
* `package.json` and `package-lock.json` - the standard Node.js project metadata files
* `public` - this directory from where React application will be server during develoopment. It contains `index.html` with other files.
* `src` - application source code, this is where the coding is doing,
* `node_modules` - the standard directory with installed packages
* `build` - it appears when you will create a production build
* `.git` and `.gitignore`

### Running app

In order to run application type `npm start` . This command will tract any changes to the source files, and when it does, it will rebuild application, and refresh webpage.

## Third-Party Dependencies

This project requires some additional resources. 

```bash
npm install bootstrap react-bootstrap react-router-dom serve
```

Which are:

* (bootstrap)[https://getbootstrap.com/] - a CSS user interface library for web pages,
* (react-bootstrap)[https://react-bootstrap.github.io/] - a React component library wrapper for the `bootstrap` package,
* (react-router-dom)[https://reactrouter.com/] - a React component library that implements client-side routing,
* (serve)[https://www.npmjs.com/package/serve] - a static file web server that can be used to run the production version of the React application.

## The manifest.json file

This is a json file that contains information about the application. It is used by client devices to provide better experience whtn the uset installs the application in their desctop or home screen. 


## React component names convention

React component names must begin with a capital letter, adn in general are written in CamelCase.

The top-level componen of an application is often given the name `App` .

Components need to be exported, so that they can be imported and used from other files.

To keep code clean, and well organized, component is written in a source file of the same name `App` -> `App.js`

## Purpose of react component.

What is a component function supposed to do? In the simplest form, it should return its own representation as an HTML element tree. 

## Empty `<>`

React requires so that each componene is a proper tree, with the single top-level node. We could add `<div>` but it would introduce unnecessary element to the page to render. 

Instead of that we can use empty tags `<>`. It is more efficient and do not introduce any render output. 

## Summary

To start a new React project easily, use Create React App (CRA).
Remove the cruft added by CRA before you begin coding your application.
A React component is a JavaScript function that renders a JSX tree and returns it.
Insert JavaScript expressions in your JSX by enclosing them in curly brackets.
Render lists of elements with map(), and include a key attribute with a unique value per element.
Add conditional rendering expressions with the && (if-then) and ?: (if-then-else) operators.