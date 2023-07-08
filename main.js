import "./style.css"
import "./responsive.css"
import luxury from "./images/icon-luxury.svg"
import sedans from "./images/icon-sedans.svg"
import suvs from "./images/icon-suvs.svg"

document.querySelector('#app').innerHTML = `
  <section class="section sedans">
    <img src="${sedans}">
    <h2>Sedans</h2>
    <p class="p-1">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
    <button>Learn More</button>
  </section>
  <section class="section suvs">
    <img src="${suvs}">
    <h2>SUVs</h2>
    <p class="p-2">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
    <button>Learn More</button>
  </section>
  <section class="section luxury">
    <img src="${luxury}">
    <h2>Luxury</h2>
    <p class="p-3">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
    <button>Learn More</button>
  </section>
`
