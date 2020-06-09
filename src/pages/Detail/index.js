import React, { Component } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import './index.css';

export default class Detail extends Component {
    state = {
        dados: []
    }
    async loadData() {
        const { id } = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({ dados: response.data });
    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <div>
                <Header />
                <div className='detail-container'>
                    <div className='card'>
                        <img className='avatar' src={this.state.dados.avatar_url} alt='' />
                        <div className='info'>
                            <span>Nome: {this.state.dados.name}</span>
                            <p>Empresa: {this.state.dados.company}</p>
                            <p>Biografia: {this.state.dados.bio}</p>
                            <p>Repositório: {this.state.dados.public_repos}</p>
                            <p>Seguidores: {this.state.dados.followers}</p>
                            <p>Sexo: {this.state.dados.sexo}</p>
                            <p>Linguagem: {this.state.dados.linguagem}</p>
                            <p>Nível: {this.state.dados.experiencia}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}