import React, { Component } from 'react';
import Card from './../components/Card';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  fetchData() {
    fetch("https://randomuser.me/api/?results=12")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.results
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  componentDidMount() {
    this.fetchData()
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="container mt-4"><div>Loading...</div></div>;
    } else {
      return (
        <div className="container mt-4">
          <h1> About </h1>
          <div className="row">
            {items.map(item => (
              <Card key={item.cell} data={item} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default About;
