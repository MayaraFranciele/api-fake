import { getProdutos } from "./get.js";


const requisicao = new Request('http://localhost:3000/produtos/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        
        document.querySelector('#btn-fetch').addEventListener('click',() => {

           getProdutos()

        });

        getProdutos()
