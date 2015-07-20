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
        <h1>윤수 생일축하해!</h1>
        <img src='assets/yoonsoo.jpg' />
        <RouteHandler />
      </div>
    );
  }

});