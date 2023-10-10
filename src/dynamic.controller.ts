import { Controller, Get, Param, Query } from "@nestjs/common";

interface userLooksLike {
    age : number,
    name : string
}

@Controller("/dynamic")
export class DynamicController {
    @Get("/user/:id") 
    getUserId(@Param() params : Record<string,any>) {
        console.log(params);
        return `recorded!${JSON.stringify(params)}`;
    }
    @Get("/q")
    getUserQuery(@Query() query:userLooksLike) {
        console.log(query.age,query.name);
        return (query);
    }
}