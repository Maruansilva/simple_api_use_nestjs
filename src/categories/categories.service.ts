import { Injectable, Get, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICategory } from './category.inteface';
import{ InjectModel } from '@nestjs/mongoose'
import { promises } from 'fs';
import { ObjectID } from 'bson';


@Injectable()
export class CategoriesService {

    constructor(
                    @InjectModel("Cartegory") private readonly categoriesSchema: Model<ICategory>
        ){}

    

    async findAll(): Promise <ICategory[]>{
        try{
            return await this.categoriesSchema.find()
        }catch(error){
             throw new InternalServerErrorException(error.message)
        }
        
    }

    async create( category: ICategory) : Promise<ICategory>{
        
        try{
                return this.categoriesSchema.create(category)
        }
        catch(error){
            throw new InternalServerErrorException(error.message)
        }
    }

    async update(category: ICategory) : Promise<ICategory>{
        
        try{
            return this.categoriesSchema.findByIdAndUpdate({_id: category.id}, category,{new:true})
        }catch(error){
            throw new InternalServerErrorException(error.message)
        }
    }


    async delete(categoryId : ObjectID) : Promise<ICategory>{
        
        try{            
           return this.categoriesSchema.findOneAndDelete({_id: categoryId})
        }catch(error){
            throw new InternalServerErrorException(error.message)
        }
    }

   

}
