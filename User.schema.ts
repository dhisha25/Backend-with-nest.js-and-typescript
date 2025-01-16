import { Schema, Prop,SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSettings } from './UserSetting.schema';

@Schema()
export class User {
    @Prop( {unique:true,required:true})
    Sno:number;
    @Prop( {unique:true,required:true})
    Name:string;

    @Prop({ unique:true,required:true})
    EmailAddress:string;

    @Prop({unique:true,required:true})
    MobileNumber:number;
    @Prop({unique:true,required:true})
    CollegeName:string;
    @Prop({unique:true,required:true})
      YearOfGraduation:number;

    // @Prop({type:mongoose.Schema.Types.ObjectId,ref:'UserSetting'})
    // Settings?:UserSettings;

}

 export const UserSchema=SchemaFactory.createForClass(User);
 
