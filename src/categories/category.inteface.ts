import { ObjectID } from 'bson'
import * as mongoose from 'mongoose'
import { exportSpecifier } from '@babel/types';


export interface ICategory extends mongoose.Document{
    
    id?: ObjectID
    name: string
    
}