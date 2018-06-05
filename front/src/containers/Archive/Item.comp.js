import React, { Component } from 'react';
import { Row, Col, Button } from "antd"
//utilities
import { renderStars } from "./utils"

require('./index.scss')

class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data } = this.props
        if (!data)
            return (
                <div className="item-text">
                    No hay hoteles
                </div>)

        return (

            <Row type="flex" justify="space-around" align="middle" className="item-container">
                <Col sm={24} md={18}>
                    <Col>
                        <img className="item-cover" src={data.image} />
                    </Col>
                    <Col className="item-name">
                        {data.name ? data.name : ""}
                    </Col>
                    <Col>
                        {renderStars(data.stars)}
                    </Col>
                    <Col>
                        {this.__renderAmenities(data.amenities)}
                    </Col>
                </Col>
                <Col sm={24} md={6} className="item-group-rigth">
                    <Col className="item-group-price">
                        <Col className="item-text">
                            Precio por noche por habitacion
                        </Col>
                        <Col className="item-price item-text">
                            <Row type="flex" justify="center" align="middle" gutter={12}>
                                <Col>ARS</Col>
                                <Col id="number">{data.price}</Col>
                            </Row>
                        </Col>
                    </Col>
                    <Col>
                        <button className="item-btn">Ver Hotel</button>
                    </Col>
                </Col>
            </Row>
        );
    }

    /**
     * Renderiza n cantidad de comodidades
     */
    __renderAmenities = (amenities) => {
        let amenitiesRender = null;
        if (!amenities)
            return amenitiesRender;

        for (const amenity of amenities) {
            if (!amenitiesRender)
                amenitiesRender = new Array();

            const idRandom = Math.random(1 - 999999)//Asigamos un numero random para construir key unicas por cada componente.
            //Seleccionamos el tipo de comodidad
            amenitiesRender.push(
                <div
                    key={`amenities-${amenity}-${idRandom}`}
                    className={`item-ic item-ic-${amenity} item-ic-mask-gray`}
                ></div>)
        }

        return amenitiesRender
    }
};

export default (Item);