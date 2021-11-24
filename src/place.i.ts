import { Visitor } from "./visitor.i";

export interface Place {
    attend(visitor: Visitor): void;
}