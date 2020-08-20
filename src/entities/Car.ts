import { Entity, Property } from "@mikro-orm/core";
import Base from "./Base";
import { ChangeTracked } from "./ChangeTracked";

@Entity()
export class Car extends ChangeTracked(Base) {
	@Property()
	namme = "Audi A8";
}
