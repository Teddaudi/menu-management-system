import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateMenuDto{
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsNotEmpty()
    link: string
}