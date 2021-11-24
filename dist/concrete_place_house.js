"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcretePlaceHouse = void 0;
class ConcretePlaceHouse {
    attend(visitor) {
        visitor.visitConcreteHouse(this);
    }
    visitHouse() {
        return 'visiting house...';
    }
}
exports.ConcretePlaceHouse = ConcretePlaceHouse;
//# sourceMappingURL=concrete_place_house.js.map