var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

module.exports = React.createClass({

  mixins: [ReactRouter.Navigation],  

  goToComments: function() {
    this.transitionTo('/comments');
  },

  render: function() {
    return (
      <div>
        <div>
          <h1 onClick={this.goToComments}>Comments</h1>
          <Link to='/posts'>Posts</Link>
        </div>
        <h1>hello world!</h1>
        <RouteHandler />
      </div>
    );
  }

});