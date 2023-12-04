const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0,
}

export const setMetalSelection = (metalSelectedByUser) => {
    transientState.metalId = metalSelectedByUser
    console.log(transientState)
}

export const setSizeSelection = (sizeSelectedByUser) => {
    transientState.sizeId = sizeSelectedByUser
    console.log(transientState)
}

export const setStyleSelection = (styleSelectedByUser) => {
    transientState.styleId = styleSelectedByUser
    console.log(transientState)
}

export const submitOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch('http://localhost:8088/orders', postOptions)

    const customEvent = new CustomEvent('orderReceived')
    document.dispatchEvent(customEvent)
}