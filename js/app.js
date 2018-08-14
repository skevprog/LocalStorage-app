const textArea = document.querySelector('#tweet');
const tweetList = document.getElementById('tweetList');

function showText(e) {
   e.preventDefault();

   let tweet = textArea.value;
   const li = document.createElement('li');
   const del = document.createElement('a');

   if (tweet.trim().length === 0) {
      alert('You must enter a description inside the tweet box')
   } else {

      del.classList.add('delete');
      del.textContent = 'X';
      
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
      li.textContent = tweet;
      
      
      li.appendChild(del)
      tweetList.appendChild(li);
      textArea.value = '';
      
      addTweetLocalStorage(tweet);
      
   }
}

function getTweetsLocalStorage() {
   let tweets;
   return localStorage.getItem('tweets') ? JSON.parse(localStorage.getItem('tweets')) : tweets = [];
}

function addTweetLocalStorage(tweet) {
   let tweets = getTweetsLocalStorage();
   tweets.push(tweet);
   localStorage.setItem('tweets', JSON.stringify(tweets))
}

function displayTweets() {
   let tweets = getTweetsLocalStorage();
   let li;

   tweets.forEach(tweet => {

      li = document.createElement('li');
      li.innerText = tweet;
      li.classList.add('list-group-item')
      tweetList.appendChild(li)

   })
};

function deleteTweet() {
   e.preventDefault();
}

displayTweets()