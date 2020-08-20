import { Property } from "@mikro-orm/core";
import Base from "./Base";

type AnyConstructor<A = Record<string, unknown>> = new (...input: any[]) => A

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function ChangeTracked<TBase extends AnyConstructor<Base>>(EntityBaseClass: TBase) {
	abstract class ChangeTracked extends EntityBaseClass {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		constructor(...args: any[]) {
			super(...args)
		}

		@Property()
		changed = new Date()
	}

	return ChangeTracked;
}
