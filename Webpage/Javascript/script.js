function update_details(){
    const card_name = document.querySelector("#mobile1 .mobile-name") //Iphone15
    card_name.textContent = "Mobile Name: MI"

    const mobile_model = document.querySelector("#mobile1 .mobile-model")
    mobile_model.textContent = "Mobile Model: A1"

    const mobile_price = document.querySelector("#mobile1 .mobile-price")
    mobile_price.textContent = "Mobile Price: 50000/-"
    console.log(card_name)
}

function add_phone(){
    const phone_list = document.getElementById("mobile")

    const phone_card = document.createElement("div")
    phone_card.classList.add("phone")

    const image_p = document.createElement("img")
    image_p.src="Images/mobile.png"

    const model = document.createElement("p")
    model.classList.add(mobile-model)
    model.innerHTML = "Mobile Model: OnePlus"

    const name = document.createElement("p")
    name.classList.add(mobile-name)
    name.innerHTML = "Mobile Name: Nord"

    const price = document.createElement("p")
    price.classList.add(mobile-price)
    price.innerHTML = "Mobile Price: 45000/-"

    phone_card.appendChild(image_p)
    phone_card.appendChild(model)
    phone_card.appendChild(name)
    phone_card.appendChild(price)

    phone_list.appendChild(phone_card)
}

// function add_phone1(pname,pmodel,pprice){
//     const phone_list = document.getElementById("mobile")

//     const phone_card = document.createElement("div")
//     phone_card.classList.add("phone")

//     const image_p = document.createElement("img")
//     image_p.src="Images/mobile.png"

//     const model = document.createElement("p")
//     model.classList.add(mobile-model)
//     model.innerHTML = "Mobile Model: "+pmodel

//     const name = document.createElement("p")
//     name.classList.add(mobile-name)
//     name.innerHTML = "Mobile Name: "+pname

//     const price = document.createElement("p")
//     price.classList.add(mobile-price)
//     price.innerHTML = "Mobile Price: "+pprice

//     phone_card.appendChild(image_p)
//     phone_card.appendChild(model)
//     phone_card.appendChild(name)
//     phone_card.appendChild(price)

//     phone_list.appendChild(phone_card)
// }

// add_phone1("New Phone","New Model","10000/-")