import React, { Component } from "react";
import NewsSingle from "./NewsSingle";
import Error from "./Error";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=8e38dda43be6470bb74d3f16a96dafd3`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewsSingle key={item.url} item={item}></NewsSingle>
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
