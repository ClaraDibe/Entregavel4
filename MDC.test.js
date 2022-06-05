const MDC = require("./MDC");

test("MDC",()=>{
    expect(MDC(2,1)).toBe(1);
    expect(MDC(2,1)).not.toBeLessThan(0);
})