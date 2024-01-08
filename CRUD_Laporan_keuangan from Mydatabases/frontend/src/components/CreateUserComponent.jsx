import React, { Component } from "react";
import UserService from "../services/UserService";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      date: "",
      desc: "",
      amount: "",
      receiver: "",
      status: "",
      jk: "",
      no_telp: "",
      address: "",
    };
    this.changedate = this.changedate.bind(this);
    this.changedesc = this.changedesc.bind(this);
    this.changeamount = this.changeamount.bind(this);
    this.changereceiver = this.changereceiver.bind(this);
    this.changestatus = this.changestatus.bind(this);
    this.changejk = this.changejk.bind(this);
    this.changeno_telp = this.changeno_telp.bind(this);
    this.changeaddress = this.changeaddress.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
            date: user.date,
            desc: user.description,
            amount: user.amount,
            receiver: user.receiver,
            status: user.status,
            jenis_kelamin: user.jk,
            no: user.no_telp,
            alamat: user.address,
        });
      });
    }
  }
  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
        date: this.state.date,
        description: this.state.desc,
        amount: this.state.amount,
        receiver: this.state.receiver,
        status: this.state.status,
        jk: this.state.jk,
        no_telp:this.state.no_telp,
        address:this.state.address,
    };
    console.log("user => " + JSON.stringify(user));

    // step 5
    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/users");
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push("/users");
      });
    }
  };

  changedate = (event) => {
    this.setState({ date: event.target.value });
  };

  changedesc = (event) => {
    this.setState({ desc: event.target.value });
  };

  changeamount = (event) => {
    this.setState({ amount: event.target.value });
  };

  changereceiver = (event) => {
    this.setState({ receiver: event.target.value });
  };

  changestatus = (event) => {
    this.setState({ status: event.target.value });
  };

  changejk = (event) => {
    this.setState({ jk: event.target.value });
  };

  changeno_telp = (event) => {
    this.setState({ no_telp: event.target.value });
  };

  changeaddress = (event) => {
    this.setState({ address: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add user</h3>;
    } else {
      return <h3 className="text-center">Edit User</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> tanggal: </label>
                    <input
                      type="date"
                      placeholder="tanggal"
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.changedate}
                    />
                  </div>
                  <div className="form-group">
                    <label> desc: </label>
                    <input
                      placeholder="desc"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changedesc}
                    />
                  </div>
                  <div className="form-group">
                    <label> amount: </label>
                    <input
                      placeholder="amount"
                      name="amount"
                      className="form-control"
                    value={this.state.amount}
                      onChange={this.changeamount}
                    />
                  </div>
                  <div className="form-group">
                    <label> receiver: </label>
                    <input
                      placeholder="receiver"
                      name="receiver"
                      className="form-control"
                      value={this.state.receiver}
                      onChange={this.changereceiver}
                    />
                  </div>

                  <div className="form-group">
                    <label> status: </label>
                    <select
                      name="status"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changestatus}
                    >
                      <option disable value="kosong">-</option>
                      <option value="kredit">Kredit</option>
                      <option value="debit">Debit</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label> Jenis Kelamin: </label>
                    <select
                      name="jk"
                      className="form-control"
                      value={this.state.jk}
                      onChange={this.changejk}
                    >
                      
                      <option disable value="kosong">-</option>
                      <option value="P">Perempuan</option>
                      <option value="L">Laki-Laki</option>
                    </select>
                  </div>
                  

                  <div className="form-group">
                    <label> no telpon: </label>
                    <input
                      placeholder="no"
                      name="no_telp"
                      className="form-control"
                      value={this.state.no_telp}
                      onChange={this.changeno_telp}
                    />
                  </div>

                  <div className="form-group">
                    <label> Address: </label>
                    <input
                      placeholder="alamat"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeaddress}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
