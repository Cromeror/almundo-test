
import React from 'react';

/**
 * Renderiza n cantidad de estrellas
 */
export const renderStars = (number = 0, iconClass = "") => {
    let stars = null

    for (let i = 0; i < number; i++) {
        if (!stars)
            stars = new Array();
        stars.push(
            <div
                key={`star-${i}`}
                className={`item-ic ${iconClass} item-ic-star item-ic-mask-yellow`}>
            </div>)
    }
    return stars
}