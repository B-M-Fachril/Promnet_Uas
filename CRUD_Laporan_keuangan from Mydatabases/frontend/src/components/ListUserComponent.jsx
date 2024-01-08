import React, { Component } from 'react'
import UserService from '../services/UserService'
import Table from 'react-bootstrap/Table';


class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: 
                this.state.users.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            if(res.data==null)
            {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                <br></br>
                 <h2 className="textmiddle">
                     Daftar Transaksi</h2>
                 <div className = "row">
                    <button className="btn btn-outline-primary"
                     onClick={this.addUser}> Tambah Transaksi</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <Table striped bordered hover variant="dark" className 
                        = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tanggal</th>
                                    <th>Deskripsi</th>
                                    <th>Total</th>
                                    <th>Penerima</th>
                                    <th>Status</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Nomor Telepon</th>
                                    <th>Alamat</th>
                                    <th>Opsi Tambahan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                            <td>
                                                {user.id}
                                            </td>
                                            <td>
                                                {user.date}
                                            </td>
                                            <td>
                                                {user.description}
                                            </td>
                                            <td>
                                                {user.amount}
                                            </td>
                                            <td>
                                                {user.receiver}
                                            </td>
                                            <td>
                                                {user.status}
                                            </td>
                                            <td>
                                                {user.jk}
                                            </td>
                                            <td>
                                                {user.no_telp}
                                            </td>
                                            <td>
                                                {user.address}
                                            </td>
                                             <td>
                      <button onClick={ () => 
                          this.editUser(user.id)} 
                               className="btn btn-outline-info">Perbaharui 
                                 </button>
                       <button style={{marginLeft: "10px"}}
                          onClick={ () => this.deleteUser(user.id)} 
                             className="btn btn-outline-danger">Hapus 
                                 </button>
                       <button style={{marginLeft: "10px"}} 
                           onClick={ () => this.viewUser(user.id)}
                              className="btn btn-outline-info">Detail 
                                  </button>
                                    </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                 </div>
            </div>
        )
    }
}

export default ListUserComponent
