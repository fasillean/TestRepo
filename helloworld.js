"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayhi = function () {
        console.log("Testing ts 1");
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
var a = new HelloWorld();
a.sayhi();
//# sourceMappingURL=helloworld.js.map