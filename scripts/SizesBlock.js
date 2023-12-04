import { setSizeSelection } from './TransientState.js'

const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "sizes") {
        setSizeSelection(parseInt(changeEvent.target.value))
    }
}

export const SizeChoices = async () => {
    const response = await fetch('http://localhost:8088/sizes')
    const sizeChoicesArray = await response.json()

    document.addEventListener("change", handleSizeChange)

    let html = ''
    const sizeHtmlStringArray = sizeChoicesArray.map((size) => {
        return `
            <div class="box__item">
                <input type="radio" id="size-${size.id}" name="sizes" value="${size.id}">
                <label for="size-${size.id}">${size.carats} carats</label>
            </div>
        `
    })

    html += sizeHtmlStringArray.join('')
    
    return html
}