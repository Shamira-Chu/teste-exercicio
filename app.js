let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function() {
    //assincrona(Async Chaining)
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
 div.innerText =json.title;
 //div.innerText = JSON.stringify(json);
  })
});
