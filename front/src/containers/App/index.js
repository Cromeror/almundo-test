import React, { Component } from 'react';
import { Layout } from "antd"
import Archive from "../Archive"

require('./index.scss')

const { Header } = Layout

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout className="container">
                <Header className="header">
                    <div className="logo" />
                </Header>
                <Layout>
                    <Archive />
                </Layout>
            </Layout>
        );
    }
};

export default (App);