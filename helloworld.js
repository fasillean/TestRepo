"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helloworld = /** @class */ (function () {
    function helloworld() {
    }
    helloworld.prototype.sayhi = function () {
        console.log("Testing ts 1");
    };
    return helloworld;
}());
exports.helloworld = helloworld;
var a = new helloworld();
a.sayhi();
//# sourceMappingURL=helloworld.js.map