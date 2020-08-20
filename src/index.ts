import { MikroORM } from "@mikro-orm/core";
import "reflect-metadata";
import mikroOrmConfiguration from "./mikro-orm.config";

(async () => {
	const orm = await MikroORM.init(mikroOrmConfiguration);
})();
