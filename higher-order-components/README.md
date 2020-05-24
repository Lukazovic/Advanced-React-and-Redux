<h1 align="center">Higher Order Components</h1>
<h4 align="center">
  <img width="300" src="https://i.imgur.com/xXNdt5M.png" /><br>
</h4>

<p align="center">
  <a href="#wrench-built-with">Built With</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">How to Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pencil-author">Author</a>
</p>

## :wrench: Built With

- [React](https://reactjs.org);
- [Create React App](https://create-react-app.dev/);
- [Redux](https://redux.js.org/).

## :page_facing_up: About

This is a simple project made to understand how Higher Order Components works in React and how to use/create them. The App consists in and text area so the user can type in a comment (users will only be able to type a new comment if they are signed in), a button to add the comment to a list of comments and a button to add comment from JSON Placeholder API. The comments will be displayed bellow the buttons. It has no styles because the goal is to learn about HOC.

*A [higher-order component (HOC)](https://reactjs.org/docs/higher-order-components.html) is an advanced technique in React for reusing component logic.* The HOC built in this application consists in check if a user is logged. If the user is logged in then the user can acess the CommentBox Component, otherwise the users is pushed to the Home page where the CommentList is displayed.

The importance of this HOC is that it can be use in all the pages that need auth to be accessed without having to repeat code.

## 💻 How to Use

- Clone the project: `git clone https://github.com/Lukazovic/Advanced-React-and-Redux.git`;
- Go to the project folder: `cd Advanced-React-and-Redux`;
- Go to the testing folder: `cd higher-order-components`;
- Download the dependencies: `npm install`;
- Start the application: `npm start`.

It will open a browser page (if it doesn't, go to [http://localhost:3000](http://localhost:3000/)).

## 🤔 How to Contribute

- Fork this repository;
- Create your branch with your feature: `git checkout -b my-feature`;
- Commit your feature: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

Then merge your pull request, you can now delete your branch.

## :pencil: Author

<table>
  <tr>
    <td align="center"><a href="https://github.com/Lukazovic"><img src="https://avatars0.githubusercontent.com/u/54550926?s=460&u=cdeeac652ce0597a986fbdcff6e249ad27a1f1da&v=4" width="100px;" alt=""/><br /><sub><b>Lucas Vieira</b></sub></a><br /></td>
  <tr>
</table>
