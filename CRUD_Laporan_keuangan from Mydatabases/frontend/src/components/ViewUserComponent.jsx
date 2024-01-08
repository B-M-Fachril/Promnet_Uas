import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="textmiddle2">Detail data</h3>
          <div className="card-body">
          <div className="row">
              <label> <h4 className="border_isi">ID:</h4> </label>
              <div> {this.state.id}</div>
            </div>
            <br></br>
            <div className="row">
              <label> <h4 className="border_isi">Date:</h4> </label>
              <div> {this.state.user.date}</div>
            </div>
            <br></br>
            <div className="row">
              <label><h4 className="border_isi">Description:</h4></label>
              <div> {this.state.user.description}</div>
            </div>
            <br></br>
            <div className="row">
              <label><h4 className="border_isi">Amount:</h4></label>
              <div> {this.state.user.amount}</div>
            </div>
            <br></br>
            <div className="row">
              <label><h4 className="border_isi">Receiver:</h4></label>
              <div> {this.state.user.receiver}</div>
            </div>
            <br></br>
            <div className="row">
              <label><h4 className="border_isi">Status:</h4> </label>
              <div> {this.state.user.status}</div>
            </div>
            <br></br>
            <div className="row">
              <label><h4 className="border_isi">Jenis Kelamin:</h4></label>
              <div> {this.state.user.jk}</div>
            </div>
            <br></br>
            <div className="row">
              <label><h4 className="border_isi">Nomor Telepone:</h4></label>
              <div> {this.state.user.no_telp}</div>
            </div>
            <br></br>
            <div className="row">
              <label><h4 className="border_isi">Alamat:</h4></label>
              <div> {this.state.user.address}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
