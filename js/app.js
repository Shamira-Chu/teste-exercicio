let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    //assincrona(Async Chaining)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let post = Post.fromRaw(json);
            div = post.renderFrom(div);


            //console.log(post);
            //div.innerText = json.body;
            //div.innerText = JSON.stringify(json,null,0);
        })
});
