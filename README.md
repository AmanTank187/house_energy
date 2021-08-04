Code Requirements:

\*Code should be written in PHP or whatever you are most comfortable with. The resulting code should not have any external dependencies required to run

\*Code should be easy to read & the front-end components should conform to W3C standards

- You can choose to create your own API Key, or we can provide one for you to use (see link in the sidebar).

Steps:

- render the form

- User adds data

- Users presses the submit button

- App makes POST request to the API with correct data

- Receive the response the data (JSON data of house energy details)

- Rendering the data to the user (Showing the Address of the house)

- User clicks on the address they want

- Render a view for singular house

- Details such as comparison to other houses to be shown

Edge cases:

- Bad user input = Validation on the form

- Not getting data back that you expect from API : Page checks bad data and informs there is a problem

- ENV variables to secure API keys
