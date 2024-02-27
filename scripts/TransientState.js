// const transientState = {
//     metalId: 0,
//     sizeId: 0,
//     styleId: 0,
//     typeId: 0
// }

const transientState = new Map()
transientState.set("metalId", 0)
transientState.set("sizeId", 0)
transientState.set("styleId", 0)
transientState.set("typeId", 0)

export const setMetalSelection = (metalSelectedByUser) => {
  transientState.set("metalId", metalSelectedByUser)
  console.log(transientState)
}

export const setSizeSelection = (sizeSelectedByUser) => {
  transientState.set("sizeId", sizeSelectedByUser)
  console.log(transientState)
}

export const setStyleSelection = (styleSelectedByUser) => {
  transientState.set("styleId", styleSelectedByUser)
  console.log(transientState)
}

export const setToChecked = (
  selectedArray,
  stateId,
  stateType,
  stateSelector,
  innerHTMLextras
) => {
  const currentId = transientState.get(stateId)
  let html = ""
  for (const item of selectedArray) {
    html += `
            <div class="box__item">
                <input type="radio" id="${stateType}-${item.id}" name="${stateType}s" value="${item.id}"
        `
    if (item.id === currentId) {
      html += " checked"
    }
    html += `
            >
            <label for="${stateType}-${item.id}">${item[stateSelector]}${innerHTMLextras}</label>
            </div>
        `
  }
  return html
}

export const setTypeSelection = (typeSelectedByUser) => {
  transientState.set("typeId", typeSelectedByUser)
  console.log(transientState)
}

export const setTypeToChecked = (typeArray) => {
  const currentId = transientState.get("typeId")
  let html = ""
  for (const item of typeArray) {
    html += `
        <div class="flex__item">
        <input type="radio" id="jewelry-${item.id}" name="jewelry-types" value="${item.id}"
        `
    if (item.id === currentId) {
      html += " checked"
    }
    html += `
            >
            <label for="jewelry-${item.id}">${item.type}</label>
            </div>
        `
  }
  return html
}

export const submitOrder = async () => {
  const transientStateObject = Object.fromEntries(transientState)
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientStateObject),
  }

  const response = await fetch("http://localhost:8088/orders", postOptions)

  transientState.set("metalId", 0)
  transientState.set("sizeId", 0)
  transientState.set("styleId", 0)
  transientState.set("typeId", 0)

  const customEvent = new CustomEvent("orderReceived")
  document.dispatchEvent(customEvent)
}
