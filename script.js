/* Data to Show*/
const data = [
  {
   quote: `"As you give out so shall you receive."`, 
   emoji: '🎭', 
   image: `url(assets/michelangelo.jpg)`, 
   name: `- Michelangelo`
   
  },  
  {
   quote: `“I dream my painting and I paint my dream.”`, 
   emoji: '🎨' , 
   image: `url(assets/vangogh.jpg)`,
    name: '- Vincent van Gogh'
  },
  {
    quote: `“Art is anything you can get away with.”`, 
    emoji: '🖌️ ', 
    image: `url(assets/warhol.jpg)`,
    name: '- Andy Warhol'
  },

   {
    quote: '“Life etches itself onto our faces as we grow older, showing our violence, excesses or kindnesses.” ', 
    emoji: '🖍️', 
    image: `url(assets/rembrandt.jpg)`,
    name: '- Rembrandt'
  },
    {
    quote: '"Simplicity is the ultimate sophistication.”', 
    emoji: '📐', 
    image: `url(assets/davinci.jpg)`,
    name: '- Leonardo da Vinci'
  },
];

var time = 3;
/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');
//name
const name = document.querySelector('div');

// Check-Check: change text
quote.innerHTML = '"Simplicity is the ultimate sophistication.”';
name.innerHTML = '- Leonardo da Vinci';
// Check-Check: change emoji text
emoji.innerHTML = "📐";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(/assets/davinci.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  name.innerHTML = data[itemNumber].name;
});
  

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
    
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  name.innerHTML = data[itemNumber].name;
});

// listen for clicks on random button
randButton.addEventListener('click', function(){
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  name.innerHTML = data[randomNumber].name;
});

// listen for keypress next
document.addEventListener('keyup', function() {
  
  if ( event.keyCode === 39 ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
    
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
  }
  
  if ( event.keyCode === 37 ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
});

//listen for spacebar//
document.addEventListener('keypress', function(){
  if ( event.keyCode === 32 ) {
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  }
});

