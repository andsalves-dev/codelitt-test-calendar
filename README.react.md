# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Original README content:

## Instructions

The goal of this exercise is to create a demo calendar application using React. We strongly recommend create-react-app to make the bootstrapping of your application really easy.

Please don't use a `calendar` library, we would like to see your own calendar logic.


### The Task

You should start by rendering a single month view of a calendar for the current month – along with the lines of the `calendar` image in this project.


### Features & Requirements:

* You need to use one of the following state management libraries: Relay, Apollo, MobX or Redux
* Ability to add a new “reminder” (max 30 chars) for a user entered day and time.
* Display reminders on the calendar view in the correct time order.
* Allow the user to select a color when creating a reminder and display it appropriately.
* Properly handle overflow when multiple reminders appear on the same date.
* Ability to edit reminders – including changing text, day and time & color.
* Ability to delete reminders.
* Expand the calendar to support more than the current month.

### Notes:

* The data should be retained across different page views, but it’s not necessary to persist it beyond a browser refresh.
* Here at Codelitt we make products for humans, this means that we will evaluate the UX of the exercise.

## Evaluation

| Functionality     |                                                              | Possible Points |
|-------------------|--------------------------------------------------------------|-----------------|
|                   | Matches the proposed requirements                            | 25              |
|                   | Console do not display any error/warning                     | 10              |
|                   | User Experience                                              | 15              |
| **Code Quality**  |                                                              | --              |
|                   | Code format, readability, maintainability, etc.              | 10              |
|                   | Folders and packages structure                               | 10              |
|                   | Separation of components and logic by clear responsibilities | 20              |
| **Testing**       |                                                              | --              |
|                   | Has tests                                                    | 5               |
| **Documentation** |                                                              | --              |
|                   | Has a README.md with instructions                            | 5               |
| **Total**         |                                                              | 100             |

### Bonus Points:
1. If you deploy the application in any server and share the link with us
2. If provide thoughts on what you could improve on your code given more time and incentives

## F.A.Q.

### Is it necessary to connect to a backend?
No, this is a simply frontend exercise.

### How do you evaluate the exercise?
For every exercise we have two senior frontend engineers from our team reviewing the code and the functionality and giving a score for each line item as shown in the previous table.

### How can I deliver the exercise?
To deliver the exercise, you should clone this repository and work on a new branch. When you'll consider it completed, just push the branch and open a Merge Request.

### Will I have access to the evaluation?
By default we only send the result, however you can feel free to request the full evaluation and we will share it with you as well as the final score.

