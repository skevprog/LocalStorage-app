const textArea = document.querySelector('#tweet');
const tweetList = document.getElementById('tweetList');

function showText(e) {
   e.preventDefault();

   let tweet = textArea.value;
   let li = document.createElement('li');

   li.textContent = tweet;
   li.classList.add('list-group-item');
   tweetList.appendChild(li);
   textArea.value = '';

   addTweetLocalStorage(tweet);

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


displayTweets()