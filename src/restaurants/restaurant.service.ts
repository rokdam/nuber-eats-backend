import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { updateRestaurantDto } from "./dtos/update-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";

@Injectable()
export class RestaurantService {
    constructor(@InjectRepository(Restaurant) 
    private readonly restaurants: Repository<Restaurant>
    ) {}
    //find메소드는 async method여서 Promise를 써줘야 함
    getAll(): Promise<Restaurant[]>{
        return this.restaurants.find();
    }

    //method : class안에 있는 function
    createRestaurant(CreateRestaurantDto: CreateRestaurantDto): Promise<Restaurant>{
        //create와 save의 차이
        // const newRestaurant = new Restaurant();
        // newRestaurant.name = CreateRestaurantDto.name;
        // 속성 하나씩 지정해 줄 필요 없이 Dto 넣어주면 끝
        const newRestaurant = this.restaurants.create(CreateRestaurantDto);
        return this.restaurants.save(newRestaurant);
    }

    updateRestaurant({id, data}: updateRestaurantDto) {
        return this.restaurants.update(id, {...data});
    }
}