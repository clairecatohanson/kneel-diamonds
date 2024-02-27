import { setMetalSelection, setToChecked } from "./TransientState.js"
// import { JSONServer } from "../server-refactor"

const handleMetalChange = (changeEvent) => {
  if (changeEvent.target.name === "metals") {
    const valueOfSelectedItem = parseInt(changeEvent.target.value)
    setMetalSelection(valueOfSelectedItem)
    const customEvent = new CustomEvent("orderBuilderChanged")
    document.dispatchEvent(customEvent)
  }
}

document.addEventListener("change", handleMetalChange)

export const MetalChoices = async () => {
  const response = await fetch("http://localhost:8088/metals")
  const metalChoicesArray = await response.json()

  const html = setToChecked(metalChoicesArray, "metalId", "metal", "metal", "")

  return html
}
