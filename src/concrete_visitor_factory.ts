import { ConcretePlaceFactory } from "./concrete_place_factory";
import { ConcretePlaceHouse } from "./concrete_place_house";
import { Visitor } from "./visitor.i";

export class ConcreteVisitorFactory implements Visitor {
    public visitConcreteHouse(element: ConcretePlaceHouse): void {
        console.log(`${element.visitHouse()} - ConcreteVisitorFactory`)
    }

    public visitConcreteFactory(element: ConcretePlaceFactory): void {
        console.log(`${element.visitFactory()} - ConcreteVisitorFactory`)
    }
}