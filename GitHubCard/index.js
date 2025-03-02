/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'Andrew15722' ];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const cards = document.querySelector('.cards');

followersArray.forEach((follower) => {
	cards.appendChild(createCard(follower));
});

function createCard(username) {
	// creating the elements
	const card = document.createElement('div');
	const cardImg = document.createElement('img');
	const cardInfo = document.createElement('div');
	const cardName = document.createElement('h3');
	const cardUserName = document.createElement('p');
	const cardLocation = document.createElement('p');
	const cardProfile = document.createElement('p');
	const cardProfileAddress = document.createElement('a');
	const cardFollowers = document.createElement('p');
	const cardFollowing = document.createElement('p');
	const cardBio = document.createElement('p');

	// setting up the structure of the elements
	card.appendChild(cardImg);
	card.appendChild(cardInfo);
	cardInfo.appendChild(cardName);
	cardInfo.appendChild(cardUserName);
	cardInfo.appendChild(cardLocation);
	cardInfo.appendChild(cardProfile);
	cardProfile.appendChild(cardProfileAddress);
	cardInfo.appendChild(cardFollowers);
	cardInfo.appendChild(cardFollowing);
	cardInfo.appendChild(cardBio);

	// setting up the styles
	card.classList.add('card');
	cardInfo.classList.add('card-info');
	cardName.classList.add('name');
	cardUserName.classList.add('username');

	// set content.
	axios
		.get(`https://api.github.com/users/${username}`)
		.then((data) => {
			console.log('it works', data);
			cardImg.src = data.data.avatar_url;
			cardName.textContent = data.data.name;
			cardUserName.textContent = data.data.login;
			cardLocation.textContent = `Location: ${data.data.location}`;
			cardProfileAddress.href = `https://github.com/${username}`;
			cardProfileAddress.textContent = `https://github.com/${username}`;
			cardFollowers.textContent = `Followers: ${data.data.followers}`;
			cardFollowing.textContent = ` Following: ${data.data.following}`;
			cardBio.textContent = `Bio: ${data.data.bio}`;
		})
		.catch((error) => {
			console.log('API currently down', error);
		});

	return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
