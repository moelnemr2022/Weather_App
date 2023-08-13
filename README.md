# Vanilla JS Dom project

The goal of this project if for you to use all the things you have learned in the javaScript module to create an interactive web site. 

//////////////////
## Description

Create a website to check the weather!

/////////////////
### html
- Create an input field, in which the user can type the name of any city to get the weather data for that city.
- Add a button. A click on the button should trigger the fetching of data.
- When the data is fetched: Display the current weather on the website. Here you can be creative: Add text, icons, animations....

### js

- Create a file with the name `secrets.js`. Store the API key in this file and add it to the `.gitignore` file, so that it is not uploaded to GitHub.
- Import the key where you need it (in the `fetch`- requests)
- Use the weather API to fetch the data you need. You will need to make 2 requests here!
- Add error handling (log the error to the console and display a message on the webpage)

## How
- Create a mock up of how you want the page to look!
- Write clean code! 
    - Use good variable names
    - Pass all the values needed in a function as parameters
    - Use modern javaScript: use destructuring and optional chaining when needed!
    - Use modules
- Use the chrome debugger to debug!

## Bonus
- Decide what should happen if the user wants to see data for another city: Will you remove the old data, or add the new data to the page?
- Add a list of most recent searches, make the items in the list clickable! (a click on a city should trigger a new request)
- Make it possible to remove an item from the list. 
