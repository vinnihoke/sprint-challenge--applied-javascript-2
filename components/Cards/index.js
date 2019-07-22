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
	// Add a new construction here. Pass in axiosData.data, but in the constructor access the data with axiosData only.
	new Article(axiosData.data.articles);
}).catch((err) => {
	console.log('Error: ', err);
});

class Article {
	constructor(axiosData){
		const mount = document.querySelector('.cards-container');

		// for(var key in articles){
		// 	this.createArticle(dataItem);
		// 	mount.appendChild(this.createArticle(dataItem));
		// }

		let arr = Objects.keys(axiosData);

		arr.forEach(key => { axiosData.key } => {
			key.createArticle(dataItem);
			mount.appendChild(this.createArticle(dataItem));
		});
	}

	createArticle(data){
		// ! This should loop as well? Because there are a few articles within each root element?
		data.forEach((topic) => {
		
		// Div.card
		const card = document.createElement('div');

		// Create div.headline output 'headline of article', append to card.
		const headline = document.createElement('div');
		headline.classList.add('headline');
		headline.textContent = `${topic.headline}`
		card.appendChild(headline);

		// Create div.author append to card
		const authorContainer = document.createElement('div');
		authorContainer.classList.add('author');
		card.appendChild(authorContainer); 

		// Create div.img-container, append to authorContainer
		const imgContainer = document.createElement('div');
		imgContainer.classList.add('img-container');
		authorContainer.appendChild(imgContainer);

		// Create img, setAttribute URL to authors image, append to img-container
		const img = document.createElement('img');
		img.setAttribute('src', `${topic.photo}`);
		imgContainer.appendChild(img);

		// Create span, output 'By {authors name}, append to authorContainer
		const author = document.createElement('span');
		author.textContent = `${topic.authorName}`;
		authorContainer.appendChild(author);

		return card;
		})
	}
}