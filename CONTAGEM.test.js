const contar = require("./CONTAGEM");

const notas = [1,10, 2];

test("numeros de alunos aprovados",()=>{
   expect(contar(notas)).toBe(1);

})

test("não pode dar menor que zero",()=>{

   expect(contar(notas)).not.toBeLessThan(0);
})
