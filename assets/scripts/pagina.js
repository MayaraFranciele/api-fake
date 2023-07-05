const h1 = document.createElement('h1');
h1.innerHTML = 'Minha página dinâmica';
h1.setAttribute('id', 'titulo');
h1.style.color = 'maroon';

document.body.appendChild(h1);

const h2 = document.createElement('h2');
h2.innerHTML = 'Esta página está sendo gerada dinamicamente';

document.body.appendChild(h2);

const p1 = document.createElement('p');
p1.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quos similique officiis corporis fugit tempora consequuntur ut ratione atque, odio deserunt nostrum culpa hic dignissimos provident placeat libero qui autem.';

document.body.appendChild(p1);