import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){

    }
    async editUser(userId: number, dto:EditUserDto){
        try {
            const user = await this.prisma.user.update({
                where:{id: userId},
                data:{...dto}
            }) 
            delete user.hash;
            return user;
        } catch (error) {
            console.error('Error updating user:', error);

            throw new InternalServerErrorException('Could not edit user');
        }
    } 
}
