import {Controller, Get, HttpCode, HttpStatus, Redirect, Req, Res} from "@nestjs/common";
import {Request ,Response } from "express";

@Controller("/albums")
export class AlbumsController {
    @Get("/info")
    @HttpCode(HttpStatus.OK)
    @Redirect('/albums/rdrct')
    getProfile(@Req() req: Request,@Res({passthrough:true}) res: Response) {
        console.log(req);
        return({
            hello:"world"
        });
    }

    @Get('/rdrct')
    redirectRoute() {
        return "redirected"
    }
}