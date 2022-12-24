const dropdownEl = document.querySelector('.dropdown');
const dropEl = document.querySelector('.drop');
const regionEl = document.querySelectorAll('.region');
const searchEl = document.getElementById('search-input')
const countryName = document.getElementsByClassName('countryName')
const regionName = document.getElementsByClassName('regionName');
const toggleEl = document.querySelector('.toggle');
const moonEl = document.querySelector('.moon');
let countryesEl = document.querySelector(".countryes");
const containerEl = document.querySelector('.container');
const countryModel = document.querySelector('.modal-country');
const closeIcon = document.querySelector('.close-icon')


async function getCountry() {
    const url = await fetch('https://restcountries.com/v2/all')
    const res = await url.json();
    res.forEach((elm) => showCuntry(elm))

}

function showCuntry(data) {

    const countryEl = document.createElement('div');
    countryEl.classList.add('country');
    //console.log(data)
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

    countryEl.addEventListener('click', () => {
        // event.preventDefault()

        countryModel.innerHTML = `
        <div class="close-icon">
        <i class="fas fa-times fa-2x"></i>
    </div>
    <div class="modal-country-details">
       <div class="modal-country-img">
           <img src="${data.flag}" alt="">
       </div>
       <div class="modal-country-details">
           <div class="modeal-country-details-left">
               <h1>${data.name}</h1>
               <p><strong>Native Name : </strong>${data.nativeName}</p>
               <p class="regionName"><strong>Population: </strong> ${data.region}</p>
               <p class="regionName"><strong> Region: </strong> ${data.region}</p>
               <p class="regionName"><strong>Sub Region: </strong> ${data.region}</p>
               <p><strong>Capital: </strong>${data.capital} </p>
           </div>
           <div class="modeal-country-details-right">
               <p><strong>Top Lavel Domain : </strong>${data.demonym}</p>
               <p class="regionName"><strong>Currencies: </strong> ${data.region}</p>
               <p><strong>Capital: </strong>${data.capital} </p>
           </div>
       </div>
    </div>`
        containerEl.classList.add('active');

        countryModel.classList.remove('active')


    });

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



closeIcon.addEventListener('click', () => {
    console.log('closebutter')
    containerEl.classList.remove('active');
    countryModel.classList.add('active')

})