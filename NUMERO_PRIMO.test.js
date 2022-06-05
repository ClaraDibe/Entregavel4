const primo = require("./NUMERO_PRIMO");

test("primo",()=>{
    expect(primo(7)).toBe(true); 
    expect(primo(15)).not.toBe(true);
})