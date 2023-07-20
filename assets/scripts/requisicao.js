import { getProdutos } from "./get.js";


const requisicao = new Request('https://json-vercel-weld.vercel.app/produtos/', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        
        document.querySelector('#btn-fetch').addEventListener('click',() => {

           getProdutos()

        });

        getProdutos()
