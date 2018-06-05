import React, { Component } from 'react';
import { Collapse, Row, Col, Input, Checkbox } from "antd"
//utilities
import { renderStars } from "./utils"

require('./index.scss')

class Filter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            indeterminate: false,
            selectAll: false,
            //Permite conoces que estrellas estan seleccionas en el filtro
            allStars: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
            }
        }
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

    /**
     * Renderiza las opciones de filtro en un componente colapsable
     */
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
                                <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    onChange={this.__onSelectAll}
                                    checked={this.state.selectAll}
                                >Todas las estrellas</Checkbox>
                            </Col>
                            {this.__buildCheckBoxStar()}
                        </Collapse.Panel>
                    </Collapse>
                </Col>
            </Row>);
    }


    __onSelectAll = (e) => {
        this.setState(prevState => {
            return {
                indeterminate: false,
                selectAll: prevState.indeterminate ? true : e.target.checked,
                allStars: {
                    1: true,
                    2: true,
                    3: true,
                    4: true,
                    5: true,
                }
            }
        });
    }

    /**
     * Permite conocer que opcion cambio de estado en el filtro por estrellas.
     */
    __onSelectOne = (e, star) => {
        this.setState(prevState => {
            const allStars = { ...prevState.allStars }
            allStars[star] = e.target.checked
            return {
                indeterminate: true,
                allStars
            }
        })
    }

    /**
     * Construye los checkbox para filtrar por numeros de estrellas.
     */
    __buildCheckBoxStar = () => {
        let checkboxRender = new Array(),
            idRandom = Math.random(1, 999999)

        for (let i = 5; i > 0; i--) {
            checkboxRender.push(
                <Col key={`container-checkbox-${i}-${idRandom}`}>
                    <Checkbox
                        key={`checkbox-star-${i}-${idRandom}`}
                        checked={this.state.allStars[i]}
                        onChange={(e) => this.__onSelectOne(e, i)}>
                        {renderStars(i, "item-ic-s-small")}
                    </Checkbox>
                </Col>);
        }
        return checkboxRender;
    }

    /**
     * Construye el formulario de busqueda por nombre.
     */
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

    /**
     * Permite construir un titulo de cabecera para los diferentes filtros.
     */
    __buildCollapseHeader = (title = "", iconClass = "") => {
        return (
            <div>
                <div className={`item-ic item-ic-small ${iconClass} item-ic-mask-blue`}></div>
                <div className="filter-header-title">{title}</div>
            </div>)
    }

    /**
     * Construye el titulo general de los filtro
     */
    __buildTitle = () => {
        return (<div className="filter-header-title">{"Filtrar"}</div>)
    }
};

export default (Filter);