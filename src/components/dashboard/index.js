import React, { Component } from 'react';
import Header from './header';
import Metrics from './metrics';
import Overview from './overview';
import { setTheme } from './../../utils/themes';

class Dashboard extends Component {

    componentDidMount() {
        if (localStorage.getItem('theme') === 'light-theme') {
            setTheme('light-theme');
        } else {
            setTheme('dark-theme');
        }
    }

    render() {
        return (
            <>
                <Header />
                <Metrics />
                <Overview />
            </>
        )
    }
}

export default Dashboard;