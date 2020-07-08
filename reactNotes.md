https://btholt.github.io/complete-intro-to-react-v5/

the repo
https://github.com/btholt/complete-intro-to-react-v5/tree/master/src

# get going : npm run dev

# esLint v Prettier

1. prettier

- is there a space or return here
- formatting and mechanical
- not looking at how the code actually works

2. esLint

- concerned with style
- what methods are being used
- all about mechanics
- enforce a11y practices

- can deal with the formatting, but use Prettier to do that

# Essentials

1. pure React
   - reuseable components = built initially App and Person
   - passing in component props
     App gets a set of objects
     Person gets parameter props and for instance props.name etc
   - Destructuring
     replace props in the functi on with { object properties }

# JSX

- to ensure the app understands react : npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

1. JSX = expression too
   function getGretting(user) {
   if (user) {
   return <h1>Hi, {formatName(user)}.</h1>
   }
   return <h1>Something else</h1>;
   }

2) Specifying children with JSX
<div className="dock" />
or

  <div>
    <h1>
      <h2>

3. JSX represents objects

# Rendering Elements

1. an element describes what is seen on the screen

- are plain objects
- React DOM updates the DOM to match the React elements
- make up components

2. rules for elements

- are immutable
- once created = no changing its children or attributes
- a UI at a ceratin point in time

- only what is necessary gets updated
  - React DOM compares elements to the previous render and applies DOM updates as needed to bring the DOM to desired state

# Hooks

1. About
   - Called Hooks aka
     stateless functional components
     function components
     function that is not a class
     - how to do state with hooks

# Effects

# Async and Routing

# Class Components

1. About
   - Called Class based components
     - must have a render method
     - cannot use hooks (ie useState)

# Error Boundaries

# Context

# Portals

# Components and props

1. conceptually = function

- accept arbitrary inputs/props and return React elements for the view

2. function and class components

- JS function
  define with a function declaration
  function Name(props) {
  return <h1>Text or with JS expression, { props.value }</h1>
  }
  }

- ES6 class
  define with a class
  class Name extends React.component {
  render() {
  return <h1>Text or with JS expression, { props.value }</h1>
  }
  }

3. rendering the component
   user defined component > passes JSX attributes and children as props

4. composing components

- components can refer to others in their output
  could be
  button, form, modal etc

5. extracting components

- aka building components with smallest purpose

6. props = read only

- no matter if component is function or a class
  -> it must never modify its own props

Rule = all react components need to be pure functions with respect to their props

# State and lifecycle

1. converting a function to a class (as opposed to using hooks)
2. lifecycle methods

- allows for freeing up resources
  didMount
  willUnmount

3. data flows down

- parent nor child know if a given component is stateful or stateless

- a component may pass its state down as props to its child components aka top-down data flow

# temp code for layout

.wrapper {
display: grid;
grid-gap: 10px;
margin: 1%;
}

.row {
display: flex;
flex: 0 1 auto;
flex-flow: row wrap;
justify-content: left;
margin-top: 3rem;
}

.item {
display: flex;
flex-flow: row wrap;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
border-radius: 6px;
padding: 1rem;
overflow: hidden;
margin: 1rem;
width: calc(50% - 2rem);
min-width: 17.5rem;
background-color: #1b1b1b;
}

.one {
grid-column: 1 / 3;
grid-row: 1 / 2;
}
.two {
grid-column: 3 / 4;
grid-row: 1 / 2;
}
.three {
grid-column: 4 / 5;
grid-row: 1 / 2;
}
