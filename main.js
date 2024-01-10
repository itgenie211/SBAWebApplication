async function breed() {
    const response = await fetch("https://api.thedogapi.com/v1/breeds")
    const data = await response.json()
    breedList(data.name)
}

breed()

function breedList(dogNames) {
    document.getElementById("breed").innerHTML = `
    <select>
        <option>Choose a dog breed</option>
        ${Object.keys(dogNames).map(function (breeds) {
            return `<option>${breeds}</option>`
        }).join('')}
</select>
`
}
