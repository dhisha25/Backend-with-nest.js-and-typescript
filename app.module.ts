import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dhishadhisha2006:<dbpassword>cluster0.mongodb.net'),
   UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
