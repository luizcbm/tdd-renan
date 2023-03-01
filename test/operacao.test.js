const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacoes')

describe('Teste da calculadora', () => {
   //--ADIÇÃO--
   it('Operação de soma', () => {
      let resultado = calculadora.sum(0, 2);
      expect(resultado).toEqual(2)

      resultado = calculadora.sum(2, 0);
      expect(resultado).toEqual(2)
      
      resultado = calculadora.sum(-1, 2);
      expect(resultado).toEqual(1)
      
      resultado = () => calculadora.sum(2, "a");
      expect(resultado).toThrow('Erro');

      resultado = () => calculadora.sum("a", 2);
      expect(resultado).toThrow('Erro');
   });
   //--SUBTRAÇÃO--
   it('Operação de subtração', () => {
      let resultado = calculadora.sub(0, 2);
      expect(resultado).toEqual(-2)

      resultado = calculadora.sub(3, 2);
      expect(resultado).toEqual(1);

      resultado = calculadora.sub(2, 2);
      expect(resultado).toEqual(0);

      resultado = () => calculadora.sub(3, "l");
      expect(resultado).toThrow('Erro');

      resultado = () => calculadora.sub("a", 2);
      expect(resultado).toThrow('Erro');
   })
   //--DIVISÃO--
   it('Operação de divisão', () => {
      let resultado = calculadora.div(0, 2);
      expect(resultado).toEqual(0)

      resultado = calculadora.div(3, 2);
      expect(resultado).toEqual(1.5);

      resultado = calculadora.div(-1, 2);
      expect(resultado).toEqual(-0.5);

      resultado = () => calculadora.div(2, "a");
      expect(resultado).toThrow('Erro');

      resultado = () => calculadora.div("a", 2);
      expect(resultado).toThrow('Erro');

      resultado = () => calculadora.div(2, 0);
      expect(resultado).toThrow('Erro');

      resultado = calculadora.div("a", "a");
      expect(resultado).toThrow('Erro');

      resultado = calculadora.div(2.2, 2);
      expect(resultado).toEqual(4.4);

      resultado = calculadora.div(3, 3.4);
      expect(resultado).toEqual(10,2);
   })
   //--MULTIPLICAÇÃO--
  it("Operacao Multiplicação", () => {
   let resultado = calculadora.mul(1, 6);
   expect(resultado).toEqual(6);

   resultado = calculadora.mul(2, 2);
   expect(resultado).toEqual(4);

   resultado = calculadora.mul(5, 5);
   expect(resultado).toEqual(25);

   resultado = calculadora.mul(60, 10);
   expect(resultado).toEqual(600);

   resultado = calculadora.mul(100, 10);
   expect(resultado).toEqual(1000);

   resultado = calculadora.mul(58, 9);
   expect(resultado).toEqual(522);

   resultado = () => calculadora.mul(56, "l");
   expect(resultado).toThrow("Erro");

   resultado = () => calculadora.mul("l", 3);
   expect(resultado).toThrow("Erro");
 });
//--POTENCIA--
 it("Operacao potencia", () => {
   let resultado = calculadora.pot(7, 4);
   expect(resultado).toEqual(2401);

   resultado = calculadora.pot(99, 2);
   expect(resultado).toEqual(9801);

   resultado = calculadora.pot(4, 16);
   expect(resultado).toEqual(4294967296);

   resultado = calculadora.pot(9, 5);
   expect(resultado).toEqual(59049);

   resultado = calculadora.pot(66, 1);
   expect(resultado).toEqual(66);

   resultado = calculadora.pot(5, 2);
   expect(resultado).toEqual(25);

   resultado = calculadora.pot(3, 3);
   expect(resultado).toEqual(27);

   resultado = () => calculadora.pot(2, "l");
   expect(resultado).toThrow("Erro");

   resultado = () => calculadora.pot("l", 8);
   expect(resultado).toThrow("Erro");
 });
//--RAIZ--
 it("Operacao raiz", () => {
   let resultado = calculadora.rai(Math.sqrt(5));
   expect(resultado).toEqual(1.4953487812212205);

   resultado = calculadora.rai(Math.sqrt(2));
   expect(resultado).toEqual(1.189207115002721);

   resultado = calculadora.rai(Math.sqrt(18));
   expect(resultado).toEqual(2.0597671439071177);

   resultado = calculadora.rai(Math.sqrt(70));
   expect(resultado).toEqual(2.892507608519078);

   resultado = calculadora.rai(Math.sqrt(81));
   expect(resultado).toEqual(3);

   resultado = calculadora.rai(Math.sqrt(63));
   expect(resultado).toEqual(2.8173132472612576);

   resultado = calculadora.rai(Math.sqrt(50));
   expect(resultado).toEqual(2.6591479484724942);

   resultado = calculadora.rai(Math.sqrt(200));
   expect(resultado).toEqual(3.760603093086394);

   resultado = () => calculadora.rai(Math.sqrt("l"));
   expect(resultado).toThrow("Erro");

 });
});
   

