/**
 * Handling all user related Fucntions in Memory
 */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDataType } from "./types/index";

let USERS = [];

@Controller('/v1users')
export class UserController {

    @Post('/createUser')
    addUser(@Body() newUser : UserDataType) {
        USERS.push(newUser);
        return "Success!";
    }

    @Get('/alluser')
    getAllUser() {
        return USERS;
    }

    @Put('/updateuser/:id')
    updateUser(@Param('id') id: number,@Body() updatedUser : UserDataType) {
        const idx = USERS.findIndex(user=>{
            user.id ===id;
        })

        if(!idx) return;
        USERS[idx] = updatedUser;
        return "Successfully Updated!";
    }
    @Get('/specific/user/:id')
    getSpecific(@Param('id') id : number) {
        const theUser = USERS.find(user=>user.id === id)
        
        if(!theUser) return "noUser";
        return theUser;
    }
    @Delete('/delete/:id')
    deleteUser(@Param('id') id : number ) {
        USERS = USERS.filter(user=>{
            user.id!==id;
        })
        return "Deleted!"
    }
}
