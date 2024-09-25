function criaCartao(categoria, pergunta, resposta){
    console.log(categoria, pergunta, resposta)
}
function criaCartao(categoria, pergunta, resposta){
    let container = documento.getElementById('container')
    let cartao= document.createElement('article')
    let responsaEstaVisivel= false
}
criaCartao.innerHTML=`
<div class="cartao_conteudo">
<!-- Código omitído... -->
</div>
`
container.appendChild(cartao)

function viraCatao(){
    respostaestaVisivel= !responsaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}