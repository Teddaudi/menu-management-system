import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    constructor(){}
    getApp(){
        return 'Welcome to the home page'
    }
}
