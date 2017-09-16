// Write JavaScript here and press Ctrl+Enter to execute


class Button extends React.Component{

	handleClick = () => {
  	this.setState(() => (
    	this.props.updateCounter(this.props.incrementor)
    ));
  };

  render(){
  	return (
    	<button onClick={this.handleClick}> +{this.props.incrementor} </button>
    )
  }
}

const ShowCounter = (props) => {
	return (
  <div>
  	<button> {props.count} </button>
  </div>
  );
};


class App extends React.Component {
	constructor(props){
  	super(props);
    this.state = {
    	counter: 0
    }
  }
  
  updateCounter = (incrementor) => {
  	this.setState((prevState) => ({
    	counter: prevState.counter + incrementor
    }));
  };
  
  
	render() {
  	return (
      <div>
        <Button incrementor={1} updateCounter={this.updateCounter}/>
        <Button incrementor={5} updateCounter={this.updateCounter}/>
        <Button incrementor={10} updateCounter={this.updateCounter}/>
        <Button incrementor={100} updateCounter={this.updateCounter}/>
        <ShowCounter count={this.state.counter}/>
      </div> 
    );
  }
}


ReactDOM.render(<App />, mountNode);