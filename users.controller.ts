import { Controller,Post,Body, UsePipes, ValidationPipe ,Get, Param, HttpException, Patch, Delete} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UserModule } from "./users.module";
import { UpdateUserDto } from "./dto/UpdateUser.dto";
import mongoose from "mongoose";

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}
    @Post()
    @UsePipes(new ValidationPipe())
createUser(@Body() createUserDto:CreateUserDto){
console.log(createUserDto);
return this.usersService.createUser(createUserDto);
}
@Get()
getUsers(){
    return this.usersService.getUsers();

}
@Get(':id')
 async getUserId(@Param('id') id:string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('User not found',404)
const findUser = await this.usersService.getUserById(id);
if(!findUser) throw new HttpException('User not found', 404);
return findUser;
}
@Patch(':id')
@UsePipes(new ValidationPipe())
 async updateUser(@Param('id') id:string, @Body() updateUserDto:UpdateUserDto)
{
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Invalid ID',400);
    const updateUser=await this.usersService.updateUser(id,updateUserDto);
    if(!updateUser) throw new HttpException('User not found',404);
    return updateUser;
}
@Delete(':id')
 async deleteUser(@Param('id') id:string){
    const isValid=mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Invalid ID',400);
    const deleteUser= await this.usersService.deleteUser(id);
    console.log(deleteUser);
}
}