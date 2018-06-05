import React, { Component } from 'react';
import { Layout } from "antd"
import Item from "./Item.comp"
import Filter from "./Filter.comp"
//Services
import hotelServices from "../../services/hotels"

require('./index.scss')
const data = require('./data.json')

class Archive extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentWillMount() {
        hotelServices.find()
            .then(hotels => {
                this.setState({ items: hotels.data.data })
            })
    }

    render() {
        return (
            <Layout.Content className="archive">
                <Filter onSearch={this.__onSearch} />
                {this.__renderItems(this.state.items)}
            </Layout.Content>
        );
    }

    __onSearch = (value = "") => {
        hotelServices.find(value)
            .then(hotels => {
                this.setState({ items: hotels.data.data })
            })
    }

    __renderItems = (items) => {
        let itemsRender = null
        if (Array.isArray(items)) {
            if (!itemsRender)
                itemsRender = new Array();
            for (const item of items) {
                itemsRender.push(<Item key={`archive-item-${item._id}`} data={item} />)
            }
        }
        return itemsRender;
    }
};

export default (Archive);