const somatorio = require("./somatorio");

test("somatorio",()=>{
    expect(somatorio ([3,2,7])).toBe(12);
})