import { Router } from "express";
import { getDataByCode } from "../controllers/airport-controller";

export const getData = Router()

getData.get('/get_by/:iata_code', getDataByCode)