import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateMenuDto, EditMenuDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
    constructor(private prisma: PrismaService) {

    }
    getMenus(userId: number) {
        return this.prisma.menu.findMany({
            where: {
                userId
            }
        })
    }
    getMenusById(userId: number, menuId: number) {
        return this.prisma.menu.findFirst({
            where: {
                id: menuId,
                userId
            }
        })
    }
    async createMenus(userId: number, dto: CreateMenuDto) {
        const menu = await this.prisma.menu.create({
            data: {
                userId,
                ...dto
            }
        })
        return menu;
    }

    async editMenusById(userId: number, menuId: number, dto: EditMenuDto) {
        const menu = await this.prisma.menu.findUnique({
            where: {
                id: menuId
            }
        })
        if (!menu || menu.userId !== userId)
            throw new ForbiddenException("Access to resources denied")
        return this.prisma.menu.update({
            where: {
                id: menuId
            },
            data: {
                ...dto
            }
        })
    }
    async deleteMenusById(userId: number, menuId: number) {
        const menu = await this.prisma.menu.findUnique({
            where: {
                id: menuId
            }
        })
        if (!menu || menu.userId !== userId)
            throw new ForbiddenException("Access to resources denied")
        await this.prisma.menu.delete({
            where: {
                id: menuId
            }
        })
    }
}
