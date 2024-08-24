import { request, response } from "express";
import { AppDataSource } from "../config/datasource";
import { Airport } from "../models/airport.entity";
import { City } from "../models/city.entity";
import { Country } from "../models/country.entity";

export const getDataByCode = async (request: { params: { iata_code: any; }; }, response: any) => {
    const { iata_code } = request.params
    try {
        const airportRepository = AppDataSource.getRepository(Airport)
        const data = await airportRepository.createQueryBuilder('airport')
            .leftJoinAndSelect(City, 'city', 'airport.city_id=city.id')
            .leftJoinAndSelect(Country, 'country', 'city.country_id=country.id')
            .where('airport.iata_code=:iata_code', { iata_code: iata_code.toUpperCase() })
            .getRawOne()

        return response.json({
            airport: {
                id: data.airport_id,
                icao_code: data.airport_icao_code,
                iata_code: data.airport_iata_code,
                name: data.airport_name,
                type: data.airport_type,
                latitude_deg: data.airport_latitude_deg,
                longitude_deg: data.airport_longitude_deg,
                elevation_ft: data.airport_elevation_ft,
                address: data.city_id ? {//check the city data is get or not
                    city: {
                        id: data.city_id,
                        name: data.city_name,
                        country_id: data.city_country_id,
                        is_active: data.city_is_active,
                        lat: data.city_lat,
                        long: data.city_long
                    },
                    country: {
                        id: data.country_id,
                        name: data.country_name,
                        country_code_two: data.country_country_code_two,
                        country_code_three: data.country_country_code_three,
                        mobile_code: data.country_mobile_code,
                        continent_id: data.country_continent_id
                    }

                } : null
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({ error: 'Internal server error' })
    }
}