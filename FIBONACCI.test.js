const fibonacci = require("./FIBONACCI");

test("Sequencia Fibonacci",()=>{
    expect(fibonacci(4)).toStrictEqual([0,1,1,2]);
    expect(fibonacci(4)).not.toBe([])
})