var HelloContent = React.createClass({

  render: function(){
    var name = this.props.name;
    var counter = this.props.counter;

    return (
      <div>
        <p>test {name} {counter} </p>
      </div>
    )
  }
})
