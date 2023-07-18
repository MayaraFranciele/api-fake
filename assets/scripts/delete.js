import { getProdutos } from "./get.js";

document.addEventListener('click', event => {
    if (event.target.classList.contains('botao-delete'))

        fetch(`http://localhost:3000/produtos/${event.target.value}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resposta => {
                if (resposta.ok) {
                    alert('Produto apagado!');
                    location.reload
                }
            })

})


const requisicao = new Request('http://localhost:3000/produtos/', {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
});



    fetch(requisicao)
        .then(resposta => resposta.json())
        //    .then(resposta => JSON.stringify(resposta))
        //   .then(resposta => JSON.parse(resposta))
        .then(resposta => {

            document.querySelector('#listaProdutos').innerHTML = "";


            for (let i = 0; i < resposta.length; i++) {
                const ul = document.createElement("ul");
                ul.classList.add('produtos');

                const img = document.createElement('img');
                img.setAttribute('height', '80')

                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;
                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;
                ul.appendChild(document.createElement('li')).appendChild(img).setAttribute('src', resposta[i].imagem);

               


                document.querySelector('#listaProdutos').appendChild(ul)

            }
            getProdutos(true)

        });

        getProdutos(true)
