"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteVisitorFactory = void 0;
class ConcreteVisitorFactory {
    visitConcreteHouse(element) {
        console.log(`${element.visitHouse()} - ConcreteVisitorFactory`);
    }
    visitConcreteFactory(element) {
        console.log(`${element.visitFactory()} - ConcreteVisitorFactory`);
    }
}
exports.ConcreteVisitorFactory = ConcreteVisitorFactory;
//# sourceMappingURL=concrete_visitor_factory.js.map