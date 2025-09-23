const funcoes = require('./funcoes')

test ('ObterNome deve retornar a "Ana" ',function(){
    expect(funcoes.obterNome()).toBe('Ana');
})

test('somar deve retornar a 8',function(){
    expect(funcoes.somar()).toBe(8);

})

test('multiplicar e deve retornar 8', function(){
    expect(funcoes.multiplicar()).toBe(8);

})

test('dividir e deve retornar 5',function(){
    expect(funcoes.dividir()).toBe(5);

})

test('obterIdade e deve retornar 20', function(){
  expect(funcoes.obterIdade()).toBe(20);  
})
