
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    // console.log("SUBMITTED THE FORM!");
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    // console.log(newLI);
    list.append(newLI);
    input.value = "";
});

const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // console.log(usernameInput.value, tweetInput.value)
    
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag); 
    newTweet.append(` - ${tweet}`);
    tweetContainer.append(newTweet);
}

const form = document.querySelector('form');
const groceryContainer = document.querySelector('#list')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    addGroceryList(quantityInput.value, productInput.value);
    quantityInput.value = '';
    productInput.value = '';
});

const addGroceryList = (qty, product) => {
    const newGroceryList = document.createElement('li');
    // newGroceryList.append(qty+ " " +product);
    //                 OR
    newGroceryList.innerText = `${qty} ${" "} ${product}`;
    groceryContainer.append(newGroceryList);
}
