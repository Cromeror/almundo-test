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
                <Collapse bordered={false}>
                    <Collapse.Panel header={this.__buildTitle()} key="filter-mobile">
                        {this.__renderFilters()}
                    </Collapse.Panel>
                </Collapse>
            </div>
        );
    }

    /**
     * Captura el valor a buscar y lo devuelve en un callback al padre de este componente
     */
    __onSearch = (e) => {
        e.preventDefault()
        const { onSearch } = this.props;
        if (onSearch)
            onSearch(document.getElementById("searchValue").value)
    }

    __renderFilters = () => {
        return (
            <Row key="filter-name">
                <Col>
                    <Collapse bordered={false}>
                        {this.__buildFilterByName()}
                        <Collapse.Panel
                            showArrow={false}
                            header={this.__buildCollapseHeader("Estrellas", "item-ic-star")}
                            key="filter-star">
                            <Col>
                                <Checkbox>Todas las estrellas</Checkbox>
                            </Col>
                            {this.__buildCheckBoxStar()}
                        </Collapse.Panel>
                    </Collapse>
                </Col>
            </Row>);
    }

    __buildCheckBoxStar = () => {
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

    __buildFilterByName = () => {
        return (
            <Collapse.Panel
                showArrow={false}
                header={this.__buildCollapseHeader("Nombre de hotel", "item-ic-search")}
                key="filter-name">
                <Row gutter={12}>
                    <Col>
                        <Input id="searchValue" />
                    </Col>
                    <Col>
                        <button
                            className="item-btn item-btn-filter"
                            onClick={this.__onSearch}>Aceptar</button>
                    </Col>
                </Row>
            </Collapse.Panel>

        )
    }

    __buildCollapseHeader = (title = "", iconClass = "") => {
        return (
            <div>
                <div className={`item-ic item-ic-small ${iconClass} item-ic-mask-blue`}></div>
                <div className="filter-header-title">{title}</div>
            </div>)
    }

    __buildTitle = () => {
        return (<div className="filter-header-title">{"Filtrar"}</div>)
    }
};

export default (Filter);