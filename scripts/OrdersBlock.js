import { submitOrder } from './TransientState.js'

document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "button__order") {
        submitOrder()
    }
})

export const PlaceOrderButton = () => {
    return '<button id="button__order">Place Order</button>'
}

export const OrdersList = async () => {
    const response = await fetch('http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size')
    const ordersArray = await response.json()

    let html = ''
    for (const order of ordersArray) {
        const orderPrice = parseFloat(order.metal.price + order.size.price + order.style.price)
        html += `<p class="one-column__item">Order #${order.id} costs <span class="bold">$${orderPrice.toFixed(2)}</span></p>`
    }
    
    return html
}