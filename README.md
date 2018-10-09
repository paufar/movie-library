# Movie Library

![Project screenshot](https://raw.githubusercontent.com/username/projectname/branch/path/to/img.png)

This project is a movie browser, using data from [the Movie DB (TMDB) API](https://www.themoviedb.org/documentation/api), that allows the user to browse through a list of top rated movies. 

The application includes the following features: 
* Display a list of top rated movies
* Filter top rated movies by genre
* Search for a specific movie by title
* Autocomplete based on user input to facilitate searching
* Movie detail view which includes a poster image, a descriptive overview and cast.

## Demo
Movie library - Live project [DEMO](https://skempin.github.io/reactjs-tmdb-app/)


## Installation
[Node.js](http://nodejs.org/download/) is required to run this application on your local machine. 

Install and run the app using the following steps: 

Clone the repository
```
git clone https://github.com/paufar/movie-library.git
```

Navigate to the repository
```
cd movie-library
```

Install the dependencies
```
npm install
```

Run the application in development mode
```
npm start
```

App will be served on and can be viewed at [https://localhost:3000](https://localhost:3000)

## Development
This application was built using ES6, React, Redux for application state and the [create-react-app](https://github.com/facebook/create-react-app) tool as a boilerplate.

All source code can be found in the *src/* directory which is then organized in the following structure: 
* **Containers** - Holds the smart components that have a direct connection/ are affected by the redux state.
* **Components**  - Holds all the other components that make up the app but have no direct connection with the state. Inludes both functional components and class components for components with internal, non-critical and UI state.
* **Actions** - Contains the methods used for fetching data from TMDB API and updating the Redux state. The project is using Redux promise middleware to handle asynchronous operations like fetching  data to manipulate actions before they reach the reducer.
* **Reducers** - Contains the root reducer which is made up from other separate reducers. Each individual state has a reducer with it's own specific operation/s.
* **Styles** - Contains individual component styles, variables, and shared styles. 

The reason behind this structure was to facilitate the production of reusable components.

## Notes
* SCSS has been added to the CRA project using [these instructions.](https://medium.com/@kswanie21/css-modules-sass-in-create-react-app-37c3152de9)
* Styling was inspired from Netflix, Movie box and different projects on Dribbble.
* App should be responsive on desktop, tablet and mobile (minimum width 320px)
* The cast list in the detailed view has been limited to 7 actors for the scope of this project. 

##### Browser support 

App has been tested to be *responsive and functional* on: 
* Chrome 69+
* Firefox 62+
* Safari 11+ 
* IE 8+


###### Future improvements 
* Implement sliders to navigate through movie lists
* Include navigation arrows to switch between movies when viewing the details modal
* Make use of a slider to display all the cast in the movie
* Actor thumbnail to link to Actor profile on another website
* Include similar movies in the detailed view
* Autocomplete keyboard navigation
* Better cast state management - Clearing cast list to avoid displaying previous cast before the new cast data has loaded
* Lazy loading data or include a full page loader
