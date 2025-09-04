let button = document.getElementById('btnUsers');
button.addEventListener('click', function() {
    //assincrona(Async Chaining)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
    //console.log('Clicou');
});
