# Chapter 3 Working with Components

## User Interface Components

Reacr-Bootstrap it is a library that provides wrappers for (Bootstra)[https://getbootstrap.com/]

React-Bootstrap uses `grids` and `stacks` as the building blocks to help to create the layout of website. 

Grid uses the `Container` component (and optionally also `Row` and `Col`) to organize subcomponents.

Stacks use the `Stack` component, to render its subcomponents vertically or horizontally. 

## The Container Component

React requires to return components as a single root node. In previous chapter in order to do that, we would need to use empty tags `<>`. Now, istead of that, we can use `Container` component. 

`Container` introduces little margin, which can be seen, when chaging from `<>` to `<Container>`

Component `Container` has a `fluid` attribute. A fluid container will automatically adjust its width to fill the browser window. Without it size would be set to standard device screen sizes. 

The `className` attribute is the equivalent of class in plain HTML. It could not be simple `class` because it would rais a conflict with JavaScript `class` keyword.

## The Header Component

The `Navbar` component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns.

The `sticky` attribute will make the bar always visible at the top of the page. 

If we want to manipulate visual effects of components, we can adjust then in src/`index.css` file. We can point them by .NAME. For example:

```css
.App {
  padding: 0;
}

.Header {
  border-bottom: 1px solid #ddd;
}
```

`Header` component, added into container make a little margins on left, and right. We can remove them by removing padding in App.

## The Sidebar Component

Common user interface component is a sidebar. Sidebar will offer navigation links to switch between pages. 

The attribute `sticky="top"` will keep the sidebar visible on the page as the user scrolls down. 

The `flex-column` has the purpose of changing the direction of its children to vertical. 

The Sidebar class name is for the application to use when styling this component. 

```css
width: 120px sets the width of the sidebar to 120 pixels
margin 5px adds a 5 pixel margin around the sidebar
position: sticky attaches the sidebar to the left side of the browser, so that it stays there when the user scrolls the content
top: 62px sets the correct vertical position for the sidebar with respect to the header
align-self: flex-start aligns the sidebar with the top border of the stack component
align-items: start aligns the children components of the sidebar to the left
```

The CSS definitions for a, a:hover and a:visited configure the colors for the links.

## Building Reusable Components

It is a good practice to have single responsible components. Good example of it is `Header`, `Sidebar`, or `Posts`. 

## Components with Props

Components can accepts arguments that will modifie its behavior. The input arguments in React are called `props`. 

For example: 

```js
<Body sidebar={true}>
  <Posts />
</Body>
```

It can be reduced to :

```js
<Body sidebar>
  <Posts />
</Body>
```

It tell that Posts will be displayed only when `sidebar` value is equal true.

For false: 

```js
<Body sidebar={false}>
  <h1>Login</h1>
  <form>
    ...
  </form>
</Body>
```

Or reduced

```js
<Body>
  <h1>Login</h1>
  <form>
    ...
  </form>
</Body>
```

So, if `sidebar` is equal `true` display posts, if `sidebar` is `false`, display login page. 

This is extremely powerful, because the Body component becomes the absolute authority on how to format the body of the page, with or without sidebar.


## Chapter Summary

To avoid reinventing the wheel, use a user interface component library such as React-Bootstrap.
Add a top-level container component that provides sensible margins on all screen sizes.
To keep your code better organized, create a subdirectory for application components.
To maximize code reuse, do not add too much to a single component, and instead split the work across several components, each having a single purpose.
Use props to create components that are reusable.