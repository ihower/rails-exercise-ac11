var TodoItem = React.createClass({
    render :function(){
      var todo = this.props.todo;

      return (
      <li>
        {todo.title}
        <a onClick={this.props.handleRemove.bind(this, todo)}> Remove </a>
      </li>
      )
    }
})

var TodoList = React.createClass({

  render: function(){
    var todos = this.props.todos;
    var handleRemove = this.props.handleRemove;

    var items = todos.map(function(todo){
      return (
        <TodoItem handleRemove={handleRemove} todo={todo} />
      )
    })

    return (
      <ul>
        {items}
      </ul>
    )
  }
})
