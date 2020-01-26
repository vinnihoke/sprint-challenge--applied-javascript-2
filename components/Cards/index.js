// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then((axiosData) => {
	console.log('axiosData.data: ', axiosData.data);
	const topics = axiosData.data.articles;

	// ! This was tricky. axiosData gave us back an object with keys as topics and arrays as values. We need to loop over the object storing each key, then use the .forEach method to loop over each item and use new Article.
	
	for(let key in topics){
		topics[key].forEach((axiosData) => {
			new Article(axiosData);
		})
	}
}).catch((err) => {
	console.log('Error: ', err);
});

class Article {
	constructor(axiosData){
		this.mount = document.querySelector('.cards-container');

		// Div.card
		this.card = document.createElement('div');
		this.card.classList.add('card');

		// Create div.headline output 'headline of article', append to card.
		this.headline = document.createElement('div');
		this.headline.classList.add('headline');
		this.headline.textContent = axiosData.headline;
		this.card.appendChild(this.headline);

		// Create div.author append to card
		this.authorContainer = document.createElement('div');
		this.authorContainer.classList.add('author');
		this.card.appendChild(this.authorContainer); 

		// Create div.img-container, append to authorContainer
		this.imgContainer = document.createElement('div');
		this.imgContainer.classList.add('img-container');
		this.authorContainer.appendChild(this.imgContainer);

		// Create img, setAttribute URL to authors image, append to img-container
		this.img = document.createElement('img');
		this.img.setAttribute('src', `${axiosData.authorPhoto}`);
		this.imgContainer.appendChild(this.img);

		// Create span, output 'By {authors name}, append to authorContainer
		this.author = document.createElement('span');
		this.author.textContent = axiosData.authorName;
		this.authorContainer.appendChild(this.author);

		this.mount.appendChild(this.card);
	}
}