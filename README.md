# angular-react

A simple weather application to demonstrate integrating a React component into an Angular component using react2angular library.  It shows how data can be passed down from the parent Angular component to the child React component for its own perusal.

The Angular component accepts a city as an input for the weather action available inside the React component.  This input is bound to the React component, meaning any change made to it is reflected immediately in the React component.  Clicking the Get Weather button in the React component triggers an API call to fetch the weather details of the specified city.

To run locally:
* Clone the repo
* Run `npm install`
* Run `npm start`
* Application should be available on `http://localhost:3000`
