//The main sections
const section = document.querySelector('section'); 
const playerLivesCount = document.querySelector ("span"); 
const playerLives = 3; 


// Linking text 
playerLivesCount.textContent = playerLives; 

//Generate the data 
const getData = () => [
    {imgSrc: './images/bicycle.jpeg', name:'bicycle'},
    {imgSrc: './images/climate-justice.jpeg', name:'bclimate-justice'},
    {imgSrc: './images/compost.webp', name:'compost'},
    {imgSrc: './images/electric-car.jpg', name:'electric-car'},
    {imgSrc: './images/fashion.jpg', name:'fashion'},
    {imgSrc: './images/kelp.jpeg', name:'kelp'},
    {imgSrc: './images/plant-based.jpeg', name:'plant-based'},
    {imgSrc: './images/plastics.jpg', name:'plastics'},
    {imgSrc: './images/public-transit.jpeg', name:'public-transit'},
    {imgSrc: './images/recycling.jpg', name:'recycling'},
    {imgSrc: './images/wind-power.jpeg', name:'wind-power'},
    {imgSrc: './images/trees.jpeg', name:'trees'},
    {imgSrc: './images/solar-power.png', name:'solar-power'},
    {imgSrc: './images/zero-waste.jpeg', name:'zero-waste'},
    {imgSrc: './images/indigenous-rights.webp', name:'indigenous-rights'},
    {imgSrc: './images/bicycle.jpeg', name:'bicycle'},
    {imgSrc: './images/climate-justice.jpeg', name:'bclimate-justice'},
    {imgSrc: './images/compost.webp', name:'compost'},
    {imgSrc: './images/electric-car.jpg', name:'electric-car'},
    {imgSrc: './images/fashion.jpg', name:'fashion'},
    {imgSrc: './images/kelp.jpeg', name:'kelp'},
    {imgSrc: './images/plant-based.jpeg', name:'plant-based'},
    {imgSrc: './images/plastics.jpg', name:'plastics'},
    {imgSrc: './images/public-transit.jpeg', name:'public-transit'},
    {imgSrc: './images/recycling.jpg', name:'recycling'},
    {imgSrc: './images/wind-power.jpeg', name:'wind-power'},
    {imgSrc: './images/trees.jpeg', name:'trees'},
    {imgSrc: './images/solar-power.png', name:'solar-power'},
    {imgSrc: './images/zero-waste.jpeg', name:'zero-waste'},
    {imgSrc: './images/indigenous-rights.webp', name:'indigenous-rights'},
]; 

//Randomize 
const randomize = () => {
   const cardData = getData(); 
   console.log(cardData);
   cardData.sort( () => Math.random() - 0.5 ); //to randomize an Array
   return cardData
};

//Card generator function 

const cardGenerator = () => {
    const cardData = randomize();
    console.log(cardData); 

    // To generate the HTML with a Loop 
     cardData.forEach((item) => {
        const card = document.createElement ("div"); 
        const face = document.createElement ("img"); 
        const back = document.createElement ("div");
        card.classList = "card"; 
        face.classList = "face"; 
        back.classList = "back"; 

    //attaching info to the cards
      face.src = item.imgSrc; 

    // attaching the cards to the section
     section.appendChild(card); 
     card.appendChild(face); 
     card.appendChild (back); 
     }); 
};

cardGenerator
