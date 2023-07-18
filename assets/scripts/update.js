import { getProdutos } from "./get.js";

document.addEventListener('click', event => {
    if (event.target.classList.contains('produtos')) {

        const elementoBase = event.target;

        document.querySelector('#id').value = elementoBase.querySelector('li:nth-child(1)').innerHTML;
        document.querySelector('#descricao').value = elementoBase.querySelector('li:nth-child(2)').innerHTML;
        document.querySelector('#preco').value = elementoBase.querySelector('li:nth-child(3)').innerHTML;
        document.querySelector('#imagem').value = elementoBase.querySelector('li:nth-child(4) img').getAttribute('src').split("imagem/").pop();


    }
    checaInputs()

})

function checaInputs() {
    const idPreenchido = document.querySelector('input#id').value !== '';
    const descricaoPreenchido = document.querySelector('input#descricao').value !== '';
    const precoPreenchido = document.querySelector('input#preco').value !== '';
    const imagemPreenchido = document.querySelector('input#imagem').value !== '';


    if (idPreenchido || descricaoPreenchido || precoPreenchido || imagemPreenchido) {
        document.querySelector('#reset').removeAttribute('disabled');
        if (idPreenchido) {

            document.querySelector('#btnAtualizar').removeAttribute('disabled');


        }
    } else {
        document.querySelector('#reset').setAttribute('disabled', '');
        document.querySelector('#btnAtualizar').setAttribute('disabled', '');
    }
}


document.querySelector('#btnAtualizar').addEventListener('click',
    () => {
        const id = document.querySelector('#id').value
        const dados = {
            'id': null,
            'descricao': document.querySelector('#descricao').value,
            'preco': document.querySelector('#preco').value,
            'imagem': document.querySelector('#imagem').value
        }

        fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dados)
        })

            .then(response => {
                if (response.ok) {
                    document.querySelector('#resposta').innerHTML = 'Produto Atualizado!';
                }

            })

        getProdutos()
    })

getProdutos()
