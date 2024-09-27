import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { MenuService } from './menu.service';
import { GetUser } from 'src/auth/decorator';
import { CreateMenuDto, EditMenuDto } from './dto';

@UseGuards(JwtGuard)
@Controller('menus')
export class MenuController {
constructor(private menuService: MenuService){}
    @Get()
    getMenus(
        @GetUser('id') userId:number
    ){
        return this.menuService.getMenus(userId)
    }

    @Get(':id')
    getMenusById(
        @GetUser('id') userId:number,
        @Param('id', ParseIntPipe) menuId:number
    ){
        return this.menuService.getMenusById(userId,menuId)
    }

    @Post()
    createMenus(
        @GetUser('id') userId:number,@Body() dto: CreateMenuDto
    ){
        return this.menuService.createMenus(userId,dto)
    }

    @Patch(':id')
    editMenusById(
        @GetUser('id') userId:number,
        @Param('id', ParseIntPipe) menuId:number,
        @Body() dto:EditMenuDto
    ){
        return this.menuService.editMenusById(userId,menuId,dto)
    }
    
    @Delete(':id')
    deleteMenusById(
        @GetUser('id') userId:number,
        @Param('id', ParseIntPipe) menuId:number
    ){
        return this.menuService.deleteMenusById(userId,menuId)
    }
}
