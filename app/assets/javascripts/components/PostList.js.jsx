var Link = ReactRouter.Link;

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Post List</h1>
        <Link to='/'>Back</Link>
      </div>
    );
  }

});