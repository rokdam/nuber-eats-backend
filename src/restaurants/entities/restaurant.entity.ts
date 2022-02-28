import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";
import { number } from "joi";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@InputType({isAbstract: true})
@ObjectType()
@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    @Field(type=> Number)
    id: number;

    @Field(type => String, {defaultValue: true })
    @Column({default: true})
    @IsString()
    @Length(5)
    name: string;

    @Field(is =>Boolean, {nullable:true})
    @Column()
    @IsBoolean()
    @IsOptional()
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