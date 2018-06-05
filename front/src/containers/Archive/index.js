import React, { Component } from 'react';
import { Layout } from "antd"
import Item from "./Item.comp"

require('./index.scss')


class Archive extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout.Content className="archive">
                <Item />
            </Layout.Content>
        );
    }
};

export default (Archive);