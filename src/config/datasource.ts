import { DataSource } from "typeorm";
import { Airport } from "../models/airport.entity";
import { Country } from "../models/country.entity";
import { City } from "../models/city.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "hava_havai",
    synchronize: true,
    logging: false,
    entities: [Airport, Country, City],
    subscribers: [],
    migrations: [],
})