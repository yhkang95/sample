var App = require('./App');
var CommentList = require('./CommentList');
var PostList = require('./PostList');

var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

module.exports = (
  <Route handler={App}>
    <Route handler={CommentList} path='comments' />
    <Route handler={PostList} path='posts' />
  </Route>
);