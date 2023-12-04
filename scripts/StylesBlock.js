import { setStyleSelection } from './TransientState.js'

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "styles") {
        setStyleSelection(parseInt(changeEvent.target.value))
    }
}

export const StyleChoices = async () => {
    const response = await fetch('http://localhost:8088/styles')
    const styleChoicesArray = await response.json()

    document.addEventListener("change", handleStyleChange)

    let html = ''
    const styleHtmlStringArray = styleChoicesArray.map((style) => {
        return `
            <div class="box__item">
                <input type="radio" id="style-${style.id}" name="styles" value="${style.id}">
                <label for="style-${style.id}">${style.style}</label>
            </div>
        `
    })
    html += styleHtmlStringArray.join('')

    return html
}