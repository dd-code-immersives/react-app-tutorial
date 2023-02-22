
 class Clock extends Component {

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocalTimeString()}.</h2>
            </div>
        );
    }
  }

