// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container")
console.log(headerContainer);

function Header(hdate, htitle, htemp) {
    const header = document.createElement("div")
    header.classList.add("header")
    headerContainer.appendChild(header)

    const date = document.createElement("span")
    date.classList.add("date")
    header.appendChild(date)
    date.textContent = hdate

    const title = document.createElement("h1")
    header.appendChild(title)
    title.textContent = htitle

    const temperature = document.createElement("span")
    temperature.classList.add("temp")
    header.appendChild(temperature)
    temperature.textContent = htemp

    return header
}
    headerContainer.appendChild(Header("March 28, 2019", "Lambda Times", "98°"));
