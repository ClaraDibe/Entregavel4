const ordenar = require("./QUICKSORT");

const ordena = [3,5,8,1];

test("Ordenando com Quicksort",()=>{
    expect(ordenar(ordena)).toStrictEqual([1,3,5,8]);
    expect(ordenar(ordena)).not.toBe([0])
})