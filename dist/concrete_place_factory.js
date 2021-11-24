"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcretePlaceFactory = void 0;
class ConcretePlaceFactory {
    attend(visitor) {
        visitor.visitConcreteFactory(this);
    }
    visitFactory() {
        return 'visiting factory...';
    }
}
exports.ConcretePlaceFactory = ConcretePlaceFactory;
//# sourceMappingURL=concrete_place_factory.js.map