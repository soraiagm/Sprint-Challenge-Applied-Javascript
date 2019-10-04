// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of                  article</div>
//
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//      <span>By {authors name}</span>
//     </div>
//   </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        response.data.articles.javascript.forEach(article =>  {
            cardContainer.appendChild(cardComponent(article))
        });
        response.data.articles.bootstrap.forEach(article => {
            cardContainer.appendChild(cardComponent(article))
        });
        response.data.articles.technology.forEach(article => {
            cardContainer.appendChild(cardComponent(article))
        });
        response.data.articles.jquery.forEach(article => {
            cardContainer.appendChild(cardComponent(article))
        });
        response.data.articles.node.forEach(article => {
            cardContainer.appendChild(cardComponent(article))
        })
        // .catch(error => {
        // console.log( error)
    });
    
const cardContainer = document.querySelector(".cards-container");

function cardComponent(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const cardAuthorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const cardAuthorImage = document.createElement('img');
    const cardAuthorName = document.createElement('span');

    
    card.appendChild(headline);
    card.appendChild(cardAuthorDiv);
    cardAuthorDiv.appendChild(imgContainer);
    imgContainer.appendChild(cardAuthorImage);
    cardAuthorDiv.appendChild(cardAuthorName);

    
    card.classList.add('card');
    headline.classList.add('headline');
    cardAuthorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

 
    headline.textContent = data.headline;
    cardAuthorName.textContent = data.authorName;
    cardAuthorImage.src = data.authorPhoto;
    
    return card

}


