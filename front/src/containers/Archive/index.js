import React, { Component } from 'react';
import { Layout } from "antd"
import Item from "./Item.comp"
import Filter from "./Filter.comp"

require('./index.scss')
const data = require('./data.json')

class Archive extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout.Content className="archive">
                <Filter />
                {this.renderItems(data)}
            </Layout.Content>
        );
    }

    renderItems = (items) => {
        let itemsRender = null
        if (Array.isArray(items)) {
            if (!itemsRender)
                itemsRender = new Array();
            for (const item of items) {
                itemsRender.push(<Item key={`archive-item-${item.id}`} data={item} />)
            }
        }
        return itemsRender;
    }
};

export default (Archive);