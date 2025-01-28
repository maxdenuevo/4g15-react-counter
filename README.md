# <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo"  /> Simple Counter

## Overview

A beginner-friendly React project that demonstrates core concepts through building an interactive seconds counter. Perfect for developers starting their journey with React.js.

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/CSS3-E34F26?style=for-the-badge&logo=css3&logoColor=white)

## Instructions

Create a seconds-counter component, called `SecondsCounter`. It should look [like this one](https://github.com/breatheco-de/exercise-simple-counter-react/blob/master/preview.gif).

- Real-time seconds counter display
- Digital clock-style interface with [Font Awesome](https://fontawesome.com/) icons.
- Automatic counting from page load

- Use the **_ReactDOM.createRoot_** to render the component into the web-app.
- Use the **_setInterval()_** function to re-render the component every second.
- The component does not need a local state, you can pass the number of seconds as **props**, like this:

```jsx
<SecondsCounter seconds={3434} />
```

For example, to create a bootstrap `<Card />` component you'd code this:

```jsx
function Card(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="http://via.placeholder.com/350x150"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and fill the card's
          content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
```

After declaring it, you can **import** and **use** it in your webapp like this:

```jsx
// Import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Card from "./component/Card.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);

// If you are using a previous version from React v18
// you have to use ReactDOM.render instead of createRoot
// like this:
// ReactDOM.render(<Card />, document.querySelector('#root'));
```

> 💡 Note how `ReactDOM.createRoot` is a function you have to use only one time in your entire application

Additionally, you can pass information through the Card component using **props**:

```jsx
// Use of the custom component
<Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />
```

For usage within the render method of your Card component (notice the image src and card title):

```jsx
// Declaration of a custom component (Card.jsx)

function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and fill the card's
          content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
```

### Basic Counter

Create a `SecondsCounter` component that:

- Displays elapsed seconds since page load
- Updates every second using `setInterval()`
- Accepts a seconds prop for initial value

Example usage:

```jsx
<SecondsCounter seconds={3434} />
```

### Component Structure

```jsx
function SecondsCounter({ seconds }) {
  return (
    <div className="counter">
      <i className="clock-icon fas fa-clock"></i>
      <div className="digit">{/* Your counter display logic */}</div>
    </div>
  );
}
```

## 🔥 Bonus

- Create an option to countdown from a given number.
- Create stop, reset, and resume functionality.
- Create an alert when the user reaches a specified time. If the user enters "10", an alert should render, notifying the user that their time was reached.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000)

## Project Source

This exercise is part of the complete 4Geeks Academy Full Stack course:

[![4Geeks Academy](https://img.shields.io/badge/4Geeks%20Academy-blue.svg)](https://4geeks.com/interactive-coding-tutorial/todo-list)
