import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { number } from "joi";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { updateRestaurantDto } from "./dtos/update-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "./restaurant.service";

@Resolver(of => Restaurant)
export class RestaurantResolver {
    constructor(private readonly restaurantService: RestaurantService) {}
    @Query(returns => [Restaurant])
    restaurants() : Promise<Restaurant[]> {
        return this.restaurantService.getAll();
    }

    @Mutation(returns => Boolean)
    async createRestaurant(
        @Args('input') CreateRestaurantDto: CreateRestaurantDto
    ): Promise<boolean> {
        try{
          await this.restaurantService.createRestaurant(CreateRestaurantDto);
        } catch(e) {
            console.log(e);
            return false;
        }
    }

    @Mutation(returns => Boolean)
    async updateRestaurant(@Args() updateRestaurantDto: updateRestaurantDto ) : Promise<Boolean> { 
        try{
            await this.restaurantService.updateRestaurant(updateRestaurantDto);
            return true;
        } catch(e) {
            console.log(e);
            return true;
        }
        
    }

}