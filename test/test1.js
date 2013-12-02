/**
 * Created by adrian on 12/1/13.
 */
describe("stuff", function() {
    it("should equal true", function() {
        expect(true).toBe(true);
        expect(false).not.toBe(true);
    })
});

describe("more stuff", function () {
   it("should be equal", function() {
       expect('hello').toEqual("hello");
   });
   it("should not work", function() {
       expect("hello").not.toEqual("hello");
   })
});