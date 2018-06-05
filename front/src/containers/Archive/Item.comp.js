import React, { Component } from 'react';
import { Row, Col, Button } from "antd"

require('./index.scss')

class Item extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { item } = this.props
        if (item) {
            //
        }
    }

    render() {
        return (
            <Row className="item-container">
                <Col>
                    <img className="item-cover" />
                </Col>
                <Col className="item-name">
                    Hotel Stefanos
                </Col>
                <Col>
                    {this.renderStars(2)}
                </Col>
                <Col>
                    {this.renderAmenities(3)}
                </Col>
                <Col className="item-group-rigth">
                    <Col className="item-group-price">
                        <Col className="item-text">
                            Precio por noche por habitacion
                        </Col>
                        <Col className="item-price item-text">
                            <Row type="flex" justify="center" align="middle" gutter={12}>
                                <Col>ARS</Col>
                                <Col id="number">234</Col>
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
    renderStars = (number) => {
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
    renderAmenities = (number) => {
        let amenities = null,
            random = Math.random(1 - 999999)//Asigamos un numero random para construir key unicas por cada componente.

        for (let i = 0; i < number; i++) {
            if (!amenities)
                amenities = new Array();
            //Seleccionamos el tipo de comodidad

            amenities.push(<div key={`amenities-${i}-${random}`} className="item-ic item-ic-bathrobes item-ic-mask-gray"></div>)
        }
        return amenities
    }
};

export default (Item);