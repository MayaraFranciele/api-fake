function getProdutos(btnDelete = false) {
            
    fetch('http://localhost:3000/produtos', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        //    .then(resposta => JSON.stringify(resposta))
        //   .then(resposta => JSON.parse(resposta))
        .then(resposta => {

            document.querySelector('#listaProdutos').innerHTML = "";


            for (let i = 0; i < resposta.length; i++) {
                const ul = document.createElement('ul');
                ul.classList.add('produtos');
                const img = document.createElement('img');
                img.setAttribute('height', '80');


                if (btnDelete){
                    const liBotao = document.createElement('li');
                    const botao = document.createElement('button');
                    botao.type = 'button';
                    botao.innerHTML = '❌';
                    botao.classList.add('botao-delete');
                    botao.value = resposta[i].id;

                    ul.appendChild(liBotao).appendChild(botao);
                }

                ul.appendChild(document.createElement('input')).setAttribute('type', 'checkbox', resposta[i].id) 

                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;
                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
                ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;
                ul.appendChild(document.createElement('li')).appendChild(img).setAttribute('src', resposta[i].imagem);
            
                document.querySelector('#listaProdutos').appendChild(ul);

                
            }

        });
}

export { getProdutos };