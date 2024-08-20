import { Component } from "react";

type ClassTLProps = {
  colors: {
    black: string;
    red: string; 
    yellow: string;
    green: string
}
}

export class ClassTrafficLight extends Component<ClassTLProps> {
  state = {
    count: 0
  }

  nextNumber = () => {
    this.setState({count: this.state.count >= 2 ? this.state.count - 2 : this.state.count + 1})
  }

  render() {
    const { black, red, yellow, green } = this.props.colors

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${this.state.count === 0 ? red : black}`}></div>
          <div className={`circle ${this.state.count === 2 ? yellow : black}`}></div>
          <div className={`circle ${this.state.count === 1 ? green : black}`}></div>
        </div>
        <button className="next-state-button" onClick={() => {
          this.nextNumber()
        }}>Next State</button>
      </div>
    );
  }
}