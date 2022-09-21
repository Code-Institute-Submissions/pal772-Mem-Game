const card = document.querySelectorAll('.cell')




suffleImage()
function suffleImage(){


    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Match.floor(Math.random()*card.length)

        c.style.order = num[random]
    })    
}

/*
function clicking() {
    
    for(let i =0; i<card.length; i++){

        card[i].addEventListener('click' ,()=>{

       front[i].classList.add('flip') 
      const filppedCard = document.querySelectorAll('.flip') 
      
      if(filppedCard.length == 2){
        match()
        }
      })
    }
}