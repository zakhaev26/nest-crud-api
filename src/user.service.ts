import { Injectable } from "@nestjs/common";
import { UserDataType } from "./types";
@Injectable()
export class UserService {

    private store = new Map<number,UserDataType>();

    addUser(user : UserDataType) {
        this.store.set(user.age,user);
    }

    getUser(id: number) {
        // return Array.from((this.store).map([_,user] => user))
    }

    updateUser(id : number , user:UserDataType) { 
        this.store.set(id,user);
    }

    deleteUser(id : number) {
        this.store.delete(id);
    }
}