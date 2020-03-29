import { render as r } from "react-dom";
import React from "react";
import Counter from "./Counter.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from "material-ui/DatePicker";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      day: 0
    };
  }

  onDateChange = (n = null, date) => {
    this.setState({
      day: date.getDay()
    });
  };

  onClickCallback = () => {
    this.setState({
      day: this.state.day + 1
    });
  };

  render() {
    return (
      <div>
        <Counter stars={this.state.day} onClickCallback={this.onClickCallback} />
        <DatePicker
          onChange={this.onDateChange}
          floatingLabelText="Выберите дату!"
        />
      </div>
    );
  }
}

r(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.querySelector(".cont")
);
