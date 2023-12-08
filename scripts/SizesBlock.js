import { setSizeSelection, setToChecked } from './TransientState.js'

const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "sizes") {
        setSizeSelection(parseInt(changeEvent.target.value))
        const customEvent = new CustomEvent('orderBuilderChanged')
        document.dispatchEvent(customEvent)
    }
}

export const SizeChoices = async () => {
    const response = await fetch('http://localhost:8088/sizes')
    const sizeChoicesArray = await response.json()

    document.addEventListener("change", handleSizeChange)

    const html = setToChecked(sizeChoicesArray, "sizeId", "size", "carats", " carats")

    // const sizeHtmlStringArray = sizeChoicesArray.map((size) => {
    //     return `
    //         <div class="box__item">
    //             <input type="radio" id="size-${size.id}" name="sizes" value="${size.id}">
    //             <label for="size-${size.id}">${size.carats} carats</label>
    //         </div>
    //     `
    // })

    // html += sizeHtmlStringArray.join('')
    
    return html
}