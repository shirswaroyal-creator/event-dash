const form=document.querySelector("#form")
const eventCards=document.querySelector(".cards")
const clearBtn = document.querySelector("#clearBtn")
const sampleBtn = document.querySelector("#sampleBtn")


form.addEventListener("submit", function(event){
    event.preventDefault()
    const title= eventTitle.value
    const date=eventDate.value
    const cat=category.value
    const desc=description.value

    const card=document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`
      <h2>${title}</h2>
      <p>🗓️${date}</p>
      <button>${cat}</button>
      <p>${desc}</p>
      <div class="deleteCard">X</div>
    `
    
    eventCards.appendChild(card)
})

eventCards.addEventListener("click", function(e){
    if(e.target.classList.contains("deleteCard")){
        e.target.parentElement.remove()
    }
})

clearBtn.addEventListener("click", function(){
    eventCards.innerHTML = ""
})

sampleBtn.addEventListener("click", function(){
    const card=document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`
      <h2>AI-Expo Event</h2>
      <p>🗓️2026-01-14</p>
      <button>Social</button>
      <p>AI Summit</p>
      <div class="deleteCard">X</div>
    `
    eventCards.appendChild(card)
})


document.addEventListener('keydown',(event)=>{
  document.querySelector('.key').innerText=event.key
})

const demoText = "<strong>Bold Text</strong> with spaces"

document.getElementById("demoHTML").innerHTML =
    "innerHTML: " + demoText

document.getElementById("demoText").innerText =
    "innerText: " + demoText

document.getElementById("demoContent").textContent =
    "textContent: " + demoText