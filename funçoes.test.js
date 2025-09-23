
const funcoes = require("./funcoes");


//01 testando numero Par 🔢
test('o teste deve retornar true para número par e false para ímpar',function(){
    expect(funcoes.ehPar(2)).toBe(true)
    expect(funcoes.ehPar(7)).toBe(false)
})

//02 Palavra com 5 Letras 📏
test('o teste precisa ter mais do que 5 letras no tamanoh da palavra',function(){
    expect(funcoes.temMaisDeCincoLetras('computador')).toBe(true)
    expect(funcoes.temMaisDeCincoLetras('oi')).toBe(false)
})

//03 Maior ou Menor de idade 👶👨
test('teste pra verificar se a pessoa e menor ou maior de idade',function(){
    expect(funcoes.verificarIdade(20)).toBe("maior de idade");
    expect(funcoes.verificarIdade(15)).toBe("menor de idade");
})

//04 Somar soma de dois numeros ➕➕
test('Somar deve retonar soma correta',function(){
    expect(funcoes.somar(3,5)).toBe(8);
    expect(funcoes.somar(-2,2)).toBe(0);
})

//05 Testando se o Nome começa com a Letra A ou a 🅰️
test('',function(){
    expect(funcoes.nomeComecaComA('Ana')).toBe(true);
    expect(funcoes.nomeComecaComA('ana')).toBe(true);
    expect(funcoes.nomeComecaComA('Bruno')).toBe(false);
})

//06 Test do campo de Texto está vazio 📝
test('CampoVazio deve retornar para o String vazia',function(){
    expect(funcoes.campoVazio("")).toBe(true);
    expect(funcoes.campoVazio("teste")).toBe(false);
})

//07  Testando se a senha tem pelo menos 6 caracteres 🔑
test('Senha digitada corretamente se a senha tiver 6 digitos',function(){
    expect(funcoes.senhaValida("377901")).toBe(true);
    expect(funcoes.senhaValida("456")).toBe(false);
})

//08  ➕➖ TESTANDO SE O NUMERO E POSITIVO, NEGATIVO OU ZERO
test('Classificando o numero corretamente',function(){
    expect(funcoes.tipoNumero(5)).toBe("positivo");
    expect(funcoes.tipoNumero(-2)).toBe("negativo");
    expect(funcoes.tipoNumero(0)).toBe("zero");
});

//09 ✖️ Testando multiplicar dois nunmeros
test('Verificando se o email tem @ ',function(){
    expect(funcoes.multiplicar(3, 4)).toBe(12);
    expect(funcoes.multiplicar(-2, 5)).toBe(-10);
});

//10  📧 Testando se o email contém @
test('verificando se tem @',function(){
    expect(funcoes.emailValido("teste@email.com")).toBe(true);
    expect(funcoes.emailValido("teste.com")).toBe(false);
});

//11 🗳️ Teste se pode votar 
test('Verificando se você tem idade pra votar se tem 16 anos',function(){
     expect(funcoes.podeVotar(16)).toBe(true);
    expect(funcoes.podeVotar(15)).toBe(false);
});

//12 🔠 Testando se a palavra está toda em maiúsculo
test('verificando se a plavra é maiúsculo',function(){
    expect(funcoes.estaMaiusculo("TESTE")).toBe(true)
    expect(funcoes.estaMaiusculo("Teste")).toBe(false)
})
;
//13  📚 Verificando se você passou de ano
test('Verficando Nota mínima de 7',function(){
    expect(funcoes.passou(7)).toBe(true);
    expect(funcoes.passou(6.9)).toBe(false);
});

//14 🔢 Testando se o número está entre 10 e 20
test('',function(){
    expect(funcoes.entreDezEVinte(10)).toBe(true);
    expect(funcoes.entreDezEVinte(15)).toBe(true);
    expect(funcoes.entreDezEVinte(20)).toBe(true);
    expect(funcoes.entreDezEVinte(25)).toBe(false);
})

//15 👥 Testando se o nome está presente na lista ['João', 'Maria', 'Pedro']
test('Verificar se seu Nome está na Lista',function(){
    expect(funcoes.nomeNaLista('João')).toBe(true)
    expect(funcoes.nomeNaLista('Maria')).toBe(true);
    expect(funcoes.nomeNaLista('Carlos')).toBe(false);
})