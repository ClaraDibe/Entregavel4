const MDC = require("./MDC");
const numeros = [2,1]
test("MDC",()=>{
    expect(MDC(numeros)).toBe(1);
    expect(MDC(numeros)).not.toBeLessThan(0);
})