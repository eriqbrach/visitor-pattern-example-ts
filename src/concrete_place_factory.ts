import { Place } from "./place.i";
import { Visitor } from "./visitor.i";

export class ConcretePlaceFactory implements Place {
    public attend(visitor: Visitor): void {
        visitor.visitConcreteFactory(this);
    }

    public visitFactory(): string {
        return 'visiting factory...';
    }
}