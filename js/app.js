const textArea = document.querySelector('#tweet');
const tweetList = document.getElementById('tweetList');

function showText(e) {
   e.preventDefault();
   let tweet = textArea.value;
   let li = document.createElement('li');

   li.textContent = tweet;
   li.classList.add('list-group-item');
   tweetList.appendChild(li);

   console.log(tweet);
}