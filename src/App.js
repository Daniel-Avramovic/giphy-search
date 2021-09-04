import React, { Fragment } from "react";
import Header from "./component/header/Header";
import Search from "./component/search-bar/Search";
import Main from "./component/main/Result";
import "./App.css";
import Footer from "./component/footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      value: "",
    };
    this.changeValue = this.changeValue.bind(this);
    // this.getData = this.getData.bind(this);
  }
  changeValue = (e) => {
    this.setState({ value: e.target.value });
  };
  componentDidMount(){
    this.setState({result: []})
    this.getData = (e) => {
      if (e.key === "Enter") {
        const api_key = "tlHJrXyl4T6FMd6KqxCEM163PtuKXIub";
        const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=15&q=${this.state.value}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => this.setState({ result: data.data, value: "" }));
      }
    };
  }
  
  // componentDidMount() {
  //   const api_key = "tlHJrXyl4T6FMd6KqxCEM163PtuKXIub";
  //   const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=15&q=${this.state.value}`;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ result: data.data }));
  // }

  render() {
    return (
      <Fragment>
        <Header />
        <Search
          value={this.state.value}
          change={this.changeValue}
          getValue={this.getData}
        />
        <Main result={this.state.result} />
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
