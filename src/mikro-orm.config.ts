import { MikroORMOptions } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

const mikroOrmConfiguration: Partial<MikroORMOptions> = {
	debug: true,
	forceUtcTimezone: true,
	metadataProvider: TsMorphMetadataProvider,
	baseDir: __dirname + "/..",
	entities: ["./dist/entities"],
	entitiesTs: ["./src/entities"],
	dbName: "postgres",
	type: "postgresql",
	user: "postgres",
	password: "postgres"
};

export default mikroOrmConfiguration;
