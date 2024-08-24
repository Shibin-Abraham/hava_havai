import { request, response } from "express";
import { AppDataSource } from "../config/datasource";
import { Airport } from "../models/airport.entity";

export const getDataByCode = async (request: { params: { iata_code: any; }; }, response: any) => {
    const { iata_code } = request.params
    try {
        const airportRepository = AppDataSource.getRepository(Airport)
        const data = await airportRepository.createQueryBuilder('airport')
            .innerJoinAndSelect('airport.city', 'city', 'airport.city_id=city.id').getMany()
        console.log(data)
        return response.json(data)
    } catch (error) {
        console.log(error)
    }
}