import { MetalChoices } from './MetalsBlock.js'
import { SizeChoices } from './SizesBlock.js'
import { StyleChoices } from './StylesBlock.js'
import { JewelryTypeChoices } from './JewelryTypes.js'
import { OrdersList, PlaceOrderButton } from './OrdersBlock.js'

const render = async () => {
    const metalsHTML = await MetalChoices()
    const sizesHTML = await SizeChoices()
    const stylesHTML = await StyleChoices()
    const typesHTML = await JewelryTypeChoices()
    const buttonHTML = PlaceOrderButton()
    const ordersHTML = await OrdersList()

    const mainHTML = `
        <section id="order-options">
            <div class="boxes-container">
                <article class="box">
                    <h2 class="box__heading">Metal</h2>
                    ${metalsHTML}
                </article>
                <article class="box">
                    <h2 class="box__heading">Gem Size</h2>
                    ${sizesHTML}
                </article>
                <article class="box">
                    <h2 class="box__heading">Style</h2>
                    ${stylesHTML}
                </article>
            </div>
            <article class="box" id="jewelry-box">
                <h2 class="box__heading">Jewelry Type</h2>
                <div id="jewelry-choices">
                    ${typesHTML}
                </div>
            </article>
            ${buttonHTML}
        </section>
        <section id="orders-submitted">
            <article class="one-column">
                <h2 class="one-column__heading">Custom Jewelry Orders</h2>
                ${ordersHTML}
            </article>
        </section>
    `
    
    const mainEl = document.querySelector('#container')
    mainEl.innerHTML = mainHTML
}

render()

document.addEventListener('orderReceived', (orderButtonClicked) => {
    console.log('order received')
    render()
})

document.addEventListener('orderBuilderChanged', (orderButtonClicked) => {
    console.log('order change received. regenerating the html...')
    render()
})
