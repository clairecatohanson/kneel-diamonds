import { setMetalSelection } from './TransientState.js'

const handleMetalChange = (changeEvent) => {
    if (changeEvent.target.name === "metals") {
        setMetalSelection(parseInt(changeEvent.target.value))
    }
}

export const MetalChoices = async () => {
    const response = await fetch('http://localhost:8088/metals')
    const metalChoicesArray = await response.json()
    
    document.addEventListener("change", handleMetalChange)

    let html = ''
    const metalHtmlStringArray = metalChoicesArray.map((metal) => {
        return `
            <div class="box__item">
                <input type="radio" id="metal-${metal.id}" name="metals" value="${metal.id}">
                <label for="metal-${metal.id}">${metal.metal}</label>
            </div>
        `
    })
    html += metalHtmlStringArray.join('')

    return html
}