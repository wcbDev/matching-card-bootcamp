//set up board
//card are intially hidden
//click two cards
//if they match, make them unhidden and unclickable
//if not, hide them
//to win, numberOfTotalUnflippedCards = 0

//all starting images
const images= [1,2,3,4]
let randomImage = []
let numberOfFlippedCards
//when we select a card and it matches, remove the element from the array and make it untargetable
function flipCard(){
    if //alreadyunflipped
        return
    
    //flip card


    numberOfFlippedCards++
    if (numberOfFlippedCards %2 === 0){
        checkForMatch()
    }


    if (numberOfFlippedCards === totalNumberofCards){
        endGame()
    }
    
}

function checkForMatch(){
    const twoCards = Array.from(document.querySelectorAll('.check'))
    const backTwoCards = Array.from(document.querySelectorAll('.backside'))
    if (count % 2 === 0) {
        if (twoCards[0].src === twoCards[1].src) {
            twoCards.forEach(image => image.classList.remove('check'))
        } else { 
            setTimeout(function () {
                backTwoCards.forEach(image => image.classList.toggle('hide'))
                twoCards.forEach(image => image.classList.remove('check'))
                twoCards.forEach(image => image.classList.toggle('hide'))
            }, 1000)
            count -= 2
        }
        backTwoCards.forEach(image => image.classList.remove('backside'))
    } else {
        return
    }
}



function endGame(){

}