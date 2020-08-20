import { Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()
export default class Base {
	@PrimaryKey()
	id: string;

	constructor(id: string) {
		this.id = id;
	}
}

