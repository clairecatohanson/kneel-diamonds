import { setStyleSelection, setToChecked } from './TransientState.js'

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "styles") {
        setStyleSelection(parseInt(changeEvent.target.value))
        const customEvent = new CustomEvent('orderBuilderChanged')
        document.dispatchEvent(customEvent)
    }
}

export const StyleChoices = async () => {
    const response = await fetch('http://localhost:8088/styles')
    const styleChoicesArray = await response.json()

    document.addEventListener("change", handleStyleChange)

    const html = setToChecked(styleChoicesArray, "styleId", "style", "style", "")

    // const styleHtmlStringArray = styleChoicesArray.map((style) => {
    //     return `
    //         <div class="box__item">
    //             <input type="radio" id="style-${style.id}" name="styles" value="${style.id}">
    //             <label for="style-${style.id}">${style.style}</label>
    //         </div>
    //     `
    // })
    // html += styleHtmlStringArray.join('')

    return html
}