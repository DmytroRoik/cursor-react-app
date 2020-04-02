# Developer Guide
1) Each task - new branch
2) DON'T push code into `develop` branch (use PR flow instead)
3) each task should be completed with Pull Request


# - Branch naming convention
Branch name should include task name
1) for new features --- `feature/feature-name` 
(for example `feature/add-profile-page`)

2) for fixing issue --- `bugfix/bug-name`
(for example `bugfix/update-profile-data`)

# - Starting New Task flow
1) go to develop branch.

Basic git flow below (creating new branch from latest develop):
 ```
 git checkout develop
 git pull
 git checkout -b feature/feature-name
 ```
 2) Make a few commits
 ```
 git commit -m 'added table header for charges tab'
 git commit -m 'added table body for charges tab'
 ```
 3) Push latest commits to github
 ```
  git push
 ```
4) Create PR (see create PR flow instructions below)
5) Add at least one Reviewer from your team (see How to add reviewer to PR section)


# - Commit name convention
1) name should describe latest changes
2) `asd`, `blablabla`, `fix` -- bad solution for commit name
3) `added add more button for table` -- good commit name


# - How to create PR
1) `New pull request` button
2) select source and target branches
source (branch with your latest commits) right selector
target (general branch) in our case `develop` - left selector
3)

---
---
---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
