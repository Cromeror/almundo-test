import React, { Component } from 'react';
import { Row, Col, Button } from "antd"

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
            <Row className="item-container">
                <Col>
                    <img className="item-cover" src={data.image} />
                </Col>
                <Col className="item-name">
                    {data.name ? data.name : ""}
                </Col>
                <Col>
                    {this.renderStars(data.stars)}
                </Col>
                <Col>
                    {this.renderAmenities(data.amenities)}
                </Col>
                <Col className="item-group-rigth">
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
     * Renderiza n cantidad de estrellas
     */
    renderStars = (number = 0) => {
        let stars = null

        for (let i = 0; i < number; i++) {
            if (!stars)
                stars = new Array();
            stars.push(<div key={`star-${i}`} className="item-ic item-ic-star item-ic-mask-yellow"></div>)
        }
        return stars
    }

    /**
     * Renderiza n cantidad de comodidades
     */
    renderAmenities = (amenities) => {
        let amenitiesRender = null;

        for (const amenity of amenities) {
            if (!amenitiesRender)
                amenitiesRender = new Array();

            const idRandom = Math.random(1 - 999999)//Asigamos un numero random para construir key unicas por cada componente.
            //Seleccionamos el tipo de comodidad
            amenitiesRender.push(
                <div
                    key={`amenities-${amenity}-${idRandom}`}
                    className={`item-ic item-ic-${amenity} item -ic-mask-gray`}
                ></div>)
        }

        return amenitiesRender
    }
};

export default (Item);