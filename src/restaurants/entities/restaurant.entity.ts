import { Field, ObjectType } from "@nestjs/graphql";
import { number } from "joi";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    @Field(type=> Number)
    id: number;

    @Field(is => String)
    @Column()
    name: string;

    @Field(is =>Boolean, {nullable:true})
    @Column()
    isVegan?: boolean;

    @Field(type => String)
    @Column()
    address: string;

    @Field(type => String)
    @Column()
    ownerName: string;

    @Field(type => String)
    @Column()
    categoryName: string;

}