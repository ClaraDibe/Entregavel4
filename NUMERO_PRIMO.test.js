const primo = require("./NUMERO_PRIMO");

test("primo",()=>{
    expect(primo(7,0)).toBe(true);
})

test("primo",()=>{
    expect(primo(6,0)).toBe(false);
})