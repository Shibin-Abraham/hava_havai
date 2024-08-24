import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { City } from "./city.entity";
import { Country } from "./country.entity";

@Entity()
export class Airport {
    @PrimaryColumn('bigint', { unsigned: true })
    id?: bigint

    @Column({ nullable: false })
    icao_code?: string

    @PrimaryColumn({ nullable: false })
    iata_code?: string

    @Column({ nullable: false })
    name?: string

    @Column({ nullable: false })
    type?: string

    @Column({ nullable: true })
    city_id?: number

    @Column({ nullable: true })
    country_id?: number

    @Column({ nullable: false })
    continent_id?: number

    @Column({ nullable: true })
    website_url?: string

    @Column({ nullable: true })
    created_at?: Date

    @Column({ nullable: true })
    updated_at?: Date

    @Column('float', { nullable: true })
    latitude_deg?: number

    @Column('float', { nullable: true })
    longitude_deg?: number

    @Column({ nullable: true })
    elevation_ft?: number

    @Column({ nullable: true })
    wikipedia_link?: string

    @ManyToOne(() => City, city => city.airports, { nullable: true })
    @JoinColumn({ name: 'city_id' })
    city?: City

    @ManyToOne(() => Country, country => country.airports, { nullable: true })
    @JoinColumn({ name: 'country_id' })
    country?: Country
}