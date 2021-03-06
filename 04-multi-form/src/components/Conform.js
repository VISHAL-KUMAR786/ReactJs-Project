import React, { Component } from "react";

export class Conform extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep(this.props.stateTransfer.step);
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep(this.props.stateTransfer.step);
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <div>
        <h1>MultiForm Header 2</h1>
        <hr />
        <form onSubmit={this.continue}>
          {firstName ? <li>ð First Name :: {firstName}</li> : ""}
          {lastName ? <li>ð Last Name :: {lastName}</li> : ""}
          {email ? <li>ð Email :: {email}</li> : ""}
          {occupation ? <li>ð Occupation :: {occupation}</li> : ""}
          {city ? <li>ð City :: {city}</li> : ""}
          {bio ? <li>ð Bio :: {bio}</li> : ""}
          <br />
          <br />
          <button type="submit" onClick={this.continue}>
            Conform ð
          </button>
          <button type="submit" onClick={this.back}>
            backð
          </button>
        </form>
      </div>
    );
  }
}

export default Conform;
