let button = document.getElementById('btnUsers');
button.addEventListener('click', function() {
    //assincrona(Async Chaining)
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
return response.json();
  })
  
  .then(function(json) {
console.log(json);
  })

});
