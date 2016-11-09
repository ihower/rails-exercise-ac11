var HelloMessage = React.createClass({

  getInitialState: function(){
    return {
      counter: 1
    }
  },

  add_counter: function(){
    var counter = this.state.counter;
    this.setState({
      counter: (counter + 1)
    })
  },

  render: function(){
    var name = this.props.name;
    var counter = this.state.counter;

    return (
      <div>
        <h2>Hello {name} {counter} </h2>
        <HelloContent name={name} counter={counter} />

        <a onClick={this.add_counter}>Click me</a>
      </div>
    )
  }
})
