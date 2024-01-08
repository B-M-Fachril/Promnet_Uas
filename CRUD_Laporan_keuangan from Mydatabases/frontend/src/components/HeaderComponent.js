import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav 
                    className="navbar navbar-dark bg-info">
                        <div>
                            <a href="/users"
                                className="navbar-brand">
                                    Database Transaksi Penggunaan Uang Dinamik 18
                            </a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
