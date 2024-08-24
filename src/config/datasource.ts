import { DataSource } from "typeorm";
import { Airport } from "../models/airport.entity";
import { Country } from "../models/country.entity";
import { City } from "../models/city.entity";
import dotenv from "dotenv"

dotenv.config()

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Airport, Country, City],
    subscribers: [],
    migrations: [],
})