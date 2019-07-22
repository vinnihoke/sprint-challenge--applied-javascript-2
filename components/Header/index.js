// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
	// Create a header
	const header = document.createElement('div')
	header.classList.add('header');

	// Append a span.date to the header
	const date = document.createElement('span');
	date.classList.add('date');
	date.textContent = '07212019';
	// ! Dynamically add the date to the header?
	header.appendChild(date);

	// Append an h1 to the header
	const title = document.createElement('h1');
	title.textContent = 'Lambda Times'
	header.appendChild(title);

	// Append a span.temp to the header
	const temp = document.createElement('span');
	temp.classList.add('temp');
	temp.textContent = '98°'
	// ! Dynamically add the date to the header?
	header.appendChild(temp);

	// Render to the DOM mounted at .headerContainer
	const headerContainer = document.querySelector('.header-container');
	headerContainer.appendChild(header);

	return header;
}

Header();






