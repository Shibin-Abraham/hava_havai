import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, } from "typeorm";
import { Airport } from "./airport.entity";
import { Country } from "./country.entity";

@Entity()
export class City {
    @PrimaryColumn('bigint', { unsigned: true })
    id?: bigint

    @Column({ nullable: false })
    name?: string

    @Column({ nullable: true })
    alt_name?: string

    @Column({ nullable: false })
    country_id?: number

    @Column({ nullable: false })
    is_active?: boolean

    @Column({ nullable: false })
    created_at?: Date

    @Column({ nullable: false })
    updated_at?: Date

    @Column('float', { nullable: false })
    lat?: number

    @Column('float', { nullable: false })
    long?: number

    @ManyToOne(() => Country, country => country.cities)
    @JoinColumn({ name: 'country_id' })
    country?: Country
}