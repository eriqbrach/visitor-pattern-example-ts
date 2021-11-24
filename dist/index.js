"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concrete_place_factory_1 = require("./concrete_place_factory");
const concrete_place_house_1 = require("./concrete_place_house");
const concrete_visitor_factory_1 = require("./concrete_visitor_factory");
const concrete_visitor_house_1 = require("./concrete_visitor_house");
function visitPlaces(places, visitor) {
    try {
        for (const place of places) {
            place.attend(visitor);
        }
    }
    catch (e) {
        console.error(e.message);
    }
}
const places = [
    new concrete_place_house_1.ConcretePlaceHouse(),
    new concrete_place_factory_1.ConcretePlaceFactory(),
];
const visitor1 = new concrete_visitor_factory_1.ConcreteVisitorFactory();
visitPlaces(places, visitor1);
console.log('');
const visitor2 = new concrete_visitor_house_1.ConcreteVisitorHouse();
visitPlaces(places, visitor2);
console.log('');
//# sourceMappingURL=index.js.map