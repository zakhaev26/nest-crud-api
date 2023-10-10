import {Controller, Get, HttpCode, HttpStatus, Req, Res} from "@nestjs/common";
import {Request ,Response } from "express";

@Controller("/albums")
export class AlbumsController {
    @Get("/info")
    @HttpCode(HttpStatus.OK)
    getProfile(@Req() req: Request,@Res() res: Response) {
        console.log(req);
        res.json({
            hello:"world"
        });
    }
}