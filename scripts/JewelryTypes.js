import { setTypeSelection, setTypeToChecked } from './TransientState.js'

const handleTypeChange = (changeEvent) => {
    if (changeEvent.target.name === "jewelry-types") {
        const selectedTypeValue = parseInt(changeEvent.target.value)
        setTypeSelection(selectedTypeValue)

        const customEvent = new CustomEvent('orderBuilderChanged')
        document.dispatchEvent(customEvent)
    }
}

document.addEventListener("change", handleTypeChange)

export const JewelryTypeChoices = async () => {
    const response = await fetch('http://localhost:8088/types')
    const jewelryTypes = await response.json()

    // const jewelryHtmlStringArray = jewelryTypes.map(type => {
    //     return `
    //         <div class="flex__item">
    //             <input type="radio" id="jewelry-${type.id}" name="jewelry-types" value="${type.id}">
    //             <label for="jewelry-${type.id}">${type.type}</label>
    //         </div>
    //     `
    // })
    // return jewelryHtmlStringArray.join('')

    const html = setTypeToChecked(jewelryTypes)
    return html
}