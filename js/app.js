const textArea = document.querySelector('#tweet');
const tweetList = document.getElementById('tweetList');

displayTweets()

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
      del.addEventListener('click', deleteTweet)

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
   let li, del;

   tweets.forEach(tweet => {

      del = document.createElement('a');
      del.classList.add('delete');
      del.textContent = 'X';
      
      li = document.createElement('li'); 
      li.innerText = tweet;
      li.classList.add('list-group-item','d-flex', 'justify-content-between')
      li.appendChild(del)
      tweetList.appendChild(li)
      del.addEventListener('click', deleteTweet)

   });

};

function deleteTweet(e) {

   e.target.parentElement.remove();

   let tweets = getTweetsLocalStorage(); 

   tweets.forEach( (data, index) => {
      if(e.target.parentElement.textContent.replace('X', '') === data) {
         tweets.splice(index, 1);
      } 
   });
   
   localStorage.setItem('tweets', JSON.stringify(tweets));
   
}
