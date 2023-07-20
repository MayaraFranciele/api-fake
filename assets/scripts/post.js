import { getProdutos } from "./get.js";

document.querySelector('#btnCadastrar').addEventListener('click',
            () => {
                
                const dados = {
                    'id': null,
                    'descricao': document.querySelector('#descricao').value,
                    'preco': document.querySelector('#preco').value,
                    'imagem': document.querySelector('#imagem').value
                }

                fetch(`https://json-vercel-weld.vercel.app/produtos/`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(dados)
                })

                    .then(response => {
                        if (response.ok) {
                            document.querySelector('#resposta').innerHTML = 'Produto Cadastrado!';
                        }

                    })

                getProdutos()
            })

        
        getProdutos()
