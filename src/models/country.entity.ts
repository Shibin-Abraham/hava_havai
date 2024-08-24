import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Airport } from "./airport.entity";
import { City } from "./city.entity";

@Entity()
export class Country {
    @PrimaryColumn('bigint', { unsigned: true })
    id?: bigint

    @Column({ nullable: false })
    name?: string

    @Column({ nullable: true })
    alt_name?: string

    @Column({ nullable: false, length: 2 })
    country_code_two?: string

    @Column({ nullable: false, length: 3 })
    country_code_three?: string

    @Column({ nullable: false })
    flag_app?: string

    @Column({ nullable: false })
    mobile_code?: number

    @Column({ nullable: false })
    continent_id?: number

    @Column({ nullable: false })
    country_flag?: string

    @OneToMany(() => Airport, airport => airport.country)
    airports?: Airport[]

    @OneToMany(() => City, city => city.country)
    cities?: City[]
}
