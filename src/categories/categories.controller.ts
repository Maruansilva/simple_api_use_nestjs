import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { async } from 'rxjs/internal/scheduler/async';
import { ICategory } from './category.inteface';

@Controller('categories')
export class CategoriesController {

    constructor( private readonly categoriesService: CategoriesService){}

    @Get()
    async index(){
        return await this.categoriesService.findAll()
    }

    @Post()
    async create(@Body() category: ICategory){
         return await this.categoriesService.create(category)

    }

    @Put()
    async update(@Body() category: ICategory){
        return await this.categoriesService.update(category)    
    }

    @Delete(":id")
    async delete(@Param() params){
        return await this.categoriesService.delete(params.id)    
    }


    


}
