import React, { Component } from 'react';
import jobIcon from '../../Img/job.svg';
import api from '../../services/api';
import io from 'socket.io-client';

import './index.css';

export default class JobsCard extends Component {
    state = {
        jobs: []
    }
    async loaddata() {
        const response = await api.get('/jobs');
        this.setState({ jobs: response.data });
    }
    registerSocket() {
        const socket = io(process.env.REACT_APP_API_URL);
        socket.on('newjob', newjob => {
            this.setState({ jobs: [newjob, ...this.state.jobs] });
            this.loaddata();
        });
    }
    componentDidMount() {
        this.registerSocket();
        this.loaddata();
    }
    render() {
        return (
            <div className='main-container'>
                {
                    //É sempre necessário uma div abaixo
                    this.state.jobs.map(j => (
                        <div className='jobs-container' key={j._id}>
                            <img src={jobIcon} alt='' />
                            <div>
                                <span>{j.description}</span>
                                <p>{j.company}</p>
                                <p>{j.company_address}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}