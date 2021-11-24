import { ConcretePlaceFactory } from "./concrete_place_factory";
import { ConcretePlaceHouse } from "./concrete_place_house";
import { ConcreteVisitorFactory } from "./concrete_visitor_factory";
import { ConcreteVisitorHouse } from "./concrete_visitor_house";
import { Place } from "./place.i";
import { Visitor } from "./visitor.i";

function visitPlaces(places: Place[], visitor: Visitor) {
    try {
        for (const place of places) {
            place.attend(visitor);
        }
    } catch (e: any) {
        console.error(e.message);
    }
}

const places = [
    new ConcretePlaceHouse(),
    new ConcretePlaceFactory(),
];

const visitor1 = new ConcreteVisitorFactory();
visitPlaces(places, visitor1);
console.log('');

const visitor2 = new ConcreteVisitorHouse();
visitPlaces(places, visitor2);
console.log('');
