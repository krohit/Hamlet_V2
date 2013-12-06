/**
 * Created by adrian on 12/1/13.
 */
describe("stuff", function() {
    it("should equal true", function() {
        expect(true).toBe(true);
        expect(false).not.toBe(true);
    });

});

describe("more stuff", function () {
    var scope;
    beforeEach(angular.mock.module("resoureceApp"));
    beforeEach(angular.mock.inject(function ($scope) {
        scope = $scope;
    }));

    it("should have the correct character list", function() {
        expect(scope.characters).toBeDefined();
    });
   it("should be equal", function() {
       expect('hello').toEqual("hello");
   });
   it("should not work", function() {
       expect("hello").not.toEqual("heLlo");
   });
});