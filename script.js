const dropdownEl = document.querySelector('.dropdown');
const dropEl = document.querySelector('.drop');
const regionEl = document.querySelectorAll('.region');
const searchEl = document.getElementById('search-input')
const countryName = document.getElementsByClassName('countryName')
const regionName = document.getElementsByClassName('regionName');
const toggleEl = document.querySelector('.toggle');
const moonEl = document.querySelector('.moon')

async function getCountry() {
    const url = await fetch('https://restcountries.com/v2/all')
    const res = await url.json();
    res.forEach((elm) => showCuntry(elm))

}

function showCuntry(data) {
    let countryesEl = document.querySelector(".countryes");
    const countryEl = document.createElement('div');
    countryEl.classList.add('country');
    // console.log(data)
    countryEl.innerHTML = `
    <div class="country">
    <div class="img">
        <img src="${data.flag}" alt="">
    </div>
    <div class="country-details">
        <h5 class="countryName">${data.name}</h5>
        <p><strong>Population : </strong>${data.population}</p>
        <p class="regionName"><strong>Region: </strong> ${data.region}</p>
        <p><strong>Capital: </strong>${data.capital} </p>
    </div>
</div>
    `
    countryesEl.appendChild(countryEl)
}


getCountry()

dropdownEl.addEventListener('click', () => {
    dropEl.classList.toggle('show-Searchbar')

});

regionEl.forEach((element) => {
    element.addEventListener('click', () => {
        //console.log(element)
        Array.from(regionName).forEach(elm => {
            if (elm.innerText.includes(element.innerText) || element.innerText == 'All') {
                elm.parentElement.parentElement.parentElement.style.display = 'grid'
            }
            else {
                elm.parentElement.parentElement.parentElement.style.display = "none"
            }
        })
    })
});

searchEl.addEventListener('input', () => {
    // console.log(searchEl.value)
    Array.from(countryName).forEach(elm => {
        if (elm.innerText.toLowerCase().includes(searchEl.value.toLowerCase())) {
            elm.parentElement.parentElement.parentElement.style.display = 'grid'
        }
        else {
            elm.parentElement.parentElement.parentElement.style.display = "none"
        }
    })
});

toggleEl.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    moonEl.classList.toggle('fas')
});