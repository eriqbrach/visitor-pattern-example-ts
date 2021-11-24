"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteVisitorHouse = void 0;
class ConcreteVisitorHouse {
    visitConcreteHouse(element) {
        console.log(`${element.visitHouse()} - ConcreteVisitorHouse`);
    }
    visitConcreteFactory(element) {
        throw new Error('house visitor cannot visit factory');
    }
}
exports.ConcreteVisitorHouse = ConcreteVisitorHouse;
//# sourceMappingURL=concrete_visitor_house.js.map