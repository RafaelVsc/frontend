import React, { Component } from 'react';

import logo from '../../assets/logo-2.svg';
import api from '../../services/api';
import "./styles.css";


export default class Main extends Component {
    state = {
        newBox: '',
    };

    handleSubmit = async e => {
        e.preventDefault();
        // console.log(this.state.newBox);
        const response = await api.post('boxes', {
            title: this.state.newBox,
        });

        this.props.history.push(`/box/${response.data._id}`)
        // console.log(response.data); 45:00 do video 3
    };

    handleInputChange = (e) => {

        this.setState({ newBox: e.target.value });
    }

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="" />
                    <input placeholder="Crie um Box" value={this.state.newBox} onChange={this.handleInputChange} />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
