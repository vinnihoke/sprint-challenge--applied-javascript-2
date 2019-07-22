// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then((axiosData) => {
	console.log('axiosData.data: ', axiosData.data);
	// Add a new construction here. Pass in axiosData.data, but in the constructor access the data with axiosData only.
	new Tab(axiosData.data.topics);
}).catch((err) => {
	console.log('Error: ', err);
});

class Tab {
	constructor(axiosData){
		const mount = document.querySelector('.topics');

		axiosData.forEach((dataItem) => {
			this.createTab(dataItem);
			mount.appendChild(this.createTab(dataItem));
		})
	}

	createTab(data){
		const tab = document.createElement('div');
		tab.classList.add('tab');
		tab.textContent = `${data}`;
		return tab;
	}
}