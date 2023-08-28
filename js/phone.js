const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    // console.log(data)
    // console.log(data.data)
    const phones = data.data
    displayPhones(phones);
}


const displayPhones = phones => {
    console.log(phones)

    const phoneContainer = document.getElementById('phone-container')
    // clear container before new serach
    phoneContainer.textContent = "";
    console.log(phones.length)
    // show all buton
    const showAllButton = document.getElementById('show-all-btn')
    if (phones.length > 12) {
        showAllButton.classList.remove('hidden')
    } else {
        showAllButton.classList.add('hidden')
    }

    // display 1ST 12 phone
    // phones = phones.slice(0,5)
    phones = phones.slice(0, 12)


    phones.forEach(phone => {
        console.log(phone)
        // make div

        const phoneCard = document.createElement('div');
        // make class
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
        //    make inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        `
        // append
        phoneContainer.appendChild(phoneCard)
    });

    //hide loading
    toggleLoadingSpinner(false); 
}

// handle search
const handleSearch = () => {
    // console.log(2345)
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    loadPhone(searchText);
}
// handle searchrecap
const handleSearch2 = () => {
    // console.log(2345)
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadPhone(searchText);
    console.log(searchText)
}
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById("loading-spinner")
    if (isLoading) {
        loadingSpinner.classList.remove("hidden")
    } else{
        loadingSpinner.classList.add("hidden")
    }
    // console.log(3456)
}

// loadPhone()

console.log("1232")