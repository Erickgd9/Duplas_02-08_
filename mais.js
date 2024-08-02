import express from 'express';

const Meu_soma = express();

Meu_soma.get('/calculo/somar/:n1/:n2', ( req, resp ) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let soma = ( n1 + n2 );

    resp.send(`A soma é de ${soma}`);
})

Meu_soma.listen(3500, () => console.log('Mamãe dormiu, API Subiu'))

Meu_soma.get('/calculo/subtrair/:n1/:n2', ( req, resp ) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let subtrair = ( n1 - n2 );

    resp.send(`A subtração é de ${subtrair}`);
})

Meu_soma.get('/calculo/multiplicacao/:n1/:n2', ( req, resp ) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let mult = ( n1 * n2 );

    resp.send(`A multiplicação é de ${mult}`);
})