var Link = ReactRouter.Link;

module.exports = React.createClass({

  mixins: [ReactRouter.Navigation],

  getInitialState: function() {
    return {
      comments: []
    };
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url: '/comments',
      success: function(response) {
        console.log('success', response);
        this.setState({comments: response});
        this.transitionTo('/posts');
      }.bind(this),
      error: function(response) {
        console.log('error', response);
      }.bind(this),
    });
  },

  renderComment: function(comment) {
    return (
      <li>
        {comment.content}
      </li>
    );
  },

  render: function() {
    return (
      <div>
        <h1>Comment List</h1>
        <ul>
          {this.state.comments.map(this.renderComment)}
        </ul>
        <Link to='/'>Back</Link>
      </div>
    );
  }

});