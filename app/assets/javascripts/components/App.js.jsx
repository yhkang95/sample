var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <div>
          <Link to='/comments'>Comments</Link>
          <Link to='/posts'>Posts</Link>
        </div>
        <h1>Hello world!</h1>
        <RouteHandler />
      </div>
    );
  }

});