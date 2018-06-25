var a = 1;
var funtest = function (arg1) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < nums.length; i++) {
        a += nums[i];
    }
    return a + arg1;
};
console.log(funtest(1, 2, 3));
//# sourceMappingURL=helloworld.js.map