import { ConcretePlaceFactory } from "./concrete_place_factory";
import { ConcretePlaceHouse } from "./concrete_place_house";

export interface Visitor {
    visitConcreteHouse(element: ConcretePlaceHouse): void;
    visitConcreteFactory(element: ConcretePlaceFactory): void;
}