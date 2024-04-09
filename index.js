const express = require("express");
const app = express();
app.use(express.json());

app.post('/questao1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2

    const resposta = {
        peca: req.body.peca,
        estoqueMedio: estoqueMedio
    }

    res.json(resposta)
})
app.post("/questao2", (req, res) => {
    const {salario}  = req.body
    console.log(salario)
    const salarioFloat = Number(salario);

    if (salario < 1000){
        var NovoSalario = salario * 1.3
        return res.json("O novo salário é: " + NovoSalario)
    }
    else 
        return res.json("O funcionário não tem direito ao aumento")
    
   
})

app.post("/questao3", (req, res) => {
    const {salario, totaldevendas, nomevendedor, percentualcomissao} = req.body
    console.log(salario, totaldevendas, nomevendedor, percentualcomissao)
    
    const salariofinal = ((totaldevendas * percentualcomissao) / 100) + salario;

    res.json(`Nome Vendendor : ${nomevendedor}, Salario a Receber: $ ${salariofinal}`) 

}) 

app.post("/questao4", (req, res) => {
    const {nome, distancia, tempo} = req.body
    console.log(nome, distancia, tempo)
    
    const velocidade = (distancia / tempo );

    res.json(`A velocidade média do piloto ${nome}, foi ${velocidade} km/h`)
})

app.post("/questao5", (req, res) => {
    const {salario}  = req.body
    console.log(salario)
    const salarioFloat = Number(salario);

    if (salario <= 2000){
        var NovoSalario = salario * 1.5
        return res.json("O novo salário é: " + NovoSalario)
    }
    else 
        var NovoSalario = salario * 1.3
        return res.json("O novo salário é: " + NovoSalario)
    
})

app.post("/questao6", (req, res) => {
    const {altura, sexo}  = req.body
    console.log(altura, sexo)

    if (sexo === "masculino"){
        var PesoIdeal = (72.7 * altura) - 58
        return res.json("O peso ideal é: " + PesoIdeal)
    }
    else if (sexo === "feminino"){
        var PesoIdeal = (62.1 * altura) - 44.7
        return res.json("O peso ideal é: " + PesoIdeal)
    }
    else    
        return res.json("O sexo informado não existe.")
   
})

app.post('/exercicio7', (req, res) => {
    let listaProdutos = []

    req.body.forEach(produto => {
        listaProdutos.push(produto)
    });

    let maiorPrecoLido = 0
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPrecoLido){
            maiorPrecoLido = produto.preco
        }
    })

    let soma = 0
    console.log("soma ", soma)
    listaProdutos.forEach(produto => {
        console.log("produto preco ", produto.preco)
        soma = soma + produto.preco
        console.log("soma ", soma)
    })

    let media = soma / listaProdutos.length

    res.json({
        maiorPrecoLido: maiorPrecoLido,
        media: media.toFixed(2)
    })
})



app.listen(3000, () => {
    console.log("aplicacao iniciando em http://localhost:3000")
})