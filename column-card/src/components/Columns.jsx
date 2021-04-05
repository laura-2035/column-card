import React from 'react'
import {ReactComponent as LogoSedans} from '../images/icon-sedans.svg'
import {ReactComponent as LogoSUVS} from '../images/icon-suvs.svg'
import {ReactComponent as LogoLuxury} from '../images/icon-luxury.svg'
import '../css/style.css'

export default () => {
    const HTMLContent =
        <div class="content">
            <div class="column">
                <LogoSedans></LogoSedans>
                <h2>Sedans</h2>
                <p>
                    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                    or on your next road trip.
                </p>
                <a href="#">Learn More</a>
            </div>
            <div class="column">
                <LogoSUVS></LogoSUVS>
                <h2>SUVS</h2>
                <p>
                    Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
                    and off-road adventures.
                </p>
                <a href="#">Learn More</a>
            </div>
            <div class="column">
                <LogoLuxury></LogoLuxury>
                <h2>Luxury</h2>
                <p>
                    Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
                    rental and arrive in style.
                </p>
                <a href="#">Learn More</a>
            </div>
        </div>
    return HTMLContent
}