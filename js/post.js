// Data Model ( Modelo de Dados )
class Post {
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
     static fromRaw(json) {
     return new Post(json.userId, json.id, json.title, json.body);
 }

renderFrom(container){
    container.innerHTML = '';

    let h2 = document.createElement(`h2`);
    h2.textContent = this.userId;

    let pTitle = document.createTextNode(`p`);
    pTitle.textContent = this.title;

    let pBody = document.createTextNode(`p`);
    pBody.textContent = this.body;

    container.appendChild(h2);
    container.appendChild(pTitle);
    container.appendChild(pBody);
}
}
// let post = new Post (1,1,"","");
