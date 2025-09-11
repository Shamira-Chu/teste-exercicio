let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    //assincrona(Async Chaining)
    fetch('https://jsonplaceholder.typicode.com/posts/101')
        .then(function (response) {
            if(response.ok){
                return response.json();
            } else {
                let errorMensage = " Erro: Recurso nao encontrado ou servidor indisponivel ";
                throw new Error(errorMensage);
            }
        })
        .then(function (json) {
            let post = Post.fromRaw(json);
            div = post.renderFrom(div);
        })
        .catch(function(error){
            console.log(error);
        });
});
