import { ConcretePlaceFactory } from "./concrete_place_factory";
import { ConcretePlaceHouse } from "./concrete_place_house";
import { Visitor } from "./visitor.i";

export class ConcreteVisitorHouse implements Visitor {
    public visitConcreteHouse(element: ConcretePlaceHouse): void {
        console.log(`${element.visitHouse()} - ConcreteVisitorHouse`)
    }

    public visitConcreteFactory(element: ConcretePlaceFactory): void {
        throw new Error('house visitor cannot visit factory');
    }
}