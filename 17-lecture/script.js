// AJAX
// const req = new XMLHttpRequest();

// req.addEventListener("load", reqListener);
// req.open("GET", "https://jsonplaceholder.typicode.com/posts");
// req.send();

// function reqListener () {
//   console.log(JSON.parse(this.responseText));
// }


// fetch
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(posts => console.log(posts));


const container = document.querySelector('#container');
const getPostsBtn = document.querySelector('#getPosts');

getPostsBtn.addEventListener('click', onGetPostsBtnClick);

function onGetPostsBtnClick(e) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        // .then((posts, qwe) => renderPosts(posts, qwe))
        .then(renderPosts)
        ;
}

function renderPosts(posts) {
    const html = posts.map(generatePostHtml).join('');

    container.insertAdjacentHTML('beforeend', html);
}

function generatePostHtml(post) {
    return `
        <li>
            <b>${post.title}</b>
            <span>${post.body}</span>
        <div>
    `;
}

// https://api.github.com/users/{{login}}