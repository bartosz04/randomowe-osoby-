import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div><h1>{this.state.person.name.title}</h1></div>
        <div><h1>{this.state.person.name.first}</h1></div>
        <div><h1>{this.state.person.name.last}</h1></div>
        <img src={this.state.person.picture.large} width="400" height="400"/>
      </div>
    );
  }
}
