/**
 * For Raw JSON Post
 */

import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/extract')
export class PostExtractor {
    @Post('/video')
    addVideo(@Body() reqData : Record <string,any>) {
        console.log(reqData);
        return {
            success:true
        }
    }

}