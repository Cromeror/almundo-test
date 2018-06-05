import React, { Component } from 'react';
import { Collapse, Row, Col, Input, Checkbox } from "antd"
//utilities
import { renderStars } from "./utils"

require('./index.scss')

class Filter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="filter">
                <Collapse bordered={false} showArrow={false}>
                    <Collapse.Panel header="This is panel header 1" key="filter-mobile">
                        {this.renderFilters()}
                    </Collapse.Panel>
                </Collapse>
            </div>
        );
    }

    renderFilters = () => {
        return (
            <Row key="filter-name">
                <Col>
                    Filters
                </Col>
                <Col>
                    <Collapse bordered={false}>
                        {this.buildFilterByName()}
                        <Collapse.Panel
                            showArrow={false}
                            header={this.buildCollapseHeader("Estrellas", "item-ic-star")}
                            key="filter-star">
                            <Col>
                                <Checkbox>Todas las estrellas</Checkbox>
                            </Col>
                            {this.buildCheckBoxStar()}
                        </Collapse.Panel>
                    </Collapse>
                </Col>
            </Row>);
    }

    buildCheckBoxStar = () => {
        let checkboxRender = new Array(),
            idRandom = Math.random(1, 999999)

        for (let i = 5; i > 0; i--) {
            checkboxRender.push(
                <Col key={`container-checkbox-${i}-${idRandom}`}>
                    <Checkbox key={`checkbox-star-${i}-${idRandom}`}>{renderStars(i, "item-ic-s-small")}</Checkbox>
                </Col>);
        }
        return checkboxRender;
    }

    buildFilterByName = () => {
        return (
            <Collapse.Panel
                showArrow={false}
                header={this.buildCollapseHeader("Nombre de hotel", "item-ic-search")}
                key="filter-name">
                <Row gutter={12}>
                    <Col>
                        <Input />
                    </Col>
                    <Col>
                        <button className="item-btn item-btn-filter">Aceptar</button>
                    </Col>
                </Row>
            </Collapse.Panel>

        )
    }

    buildCollapseHeader = (title = "", iconClass = "") => {
        return (
            <div>
                <div className={`item-ic item-ic-small ${iconClass} item-ic-mask-blue`}></div>
                <div className="filter-header-title">{title}</div>
            </div>)
    }
};

export default (Filter);