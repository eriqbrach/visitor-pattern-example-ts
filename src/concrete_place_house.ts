import { Place } from "./place.i";
import { Visitor } from "./visitor.i";

export class ConcretePlaceHouse implements Place {
    public attend(visitor: Visitor): void {
        visitor.visitConcreteHouse(this);
    }

    public visitHouse(): string {
        return 'visiting house...';
    }
}