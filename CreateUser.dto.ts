import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
export class CreateUserSettingsDto{
    @IsOptional()
    @IsBoolean()
receiveNotification?:boolean;
@IsOptional()
@IsBoolean()
receiveEmail?:boolean;
@IsOptional()
@IsBoolean()
receiveSms?:boolean;
}
export class CreateUserDto{
    @IsNumber()
    @IsNotEmpty()
    Sno:number;
    @IsNotEmpty()
    @IsString()
    Name:string;

    @IsString()
    @IsNotEmpty()
   

    EmailAddress:string;
    @IsNumber()
    @IsNotEmpty()
   

    MobileNumber:number;
    @IsString()
    @IsNotEmpty()
   

    CollegeName:string;
    @IsNumber()
    @IsNotEmpty()
   

    YearOfGraduation:number;
   
}
