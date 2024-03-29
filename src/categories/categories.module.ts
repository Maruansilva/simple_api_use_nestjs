import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './category.schema';

@Module({
  imports:[
            MongooseModule.forFeature([{name:'Cartegory', schema:CategorySchema}])
  ], 

  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
