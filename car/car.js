"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(engine, wheels) {
        this.engine = engine;
        this.wheels = wheels;
    }
    Car.prototype.startEngine = function () {
        this.engine.start();
    };
    return Car;
}());
exports.Car = Car;
