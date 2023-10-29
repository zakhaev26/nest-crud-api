import { Module } from "@nestjs/common";

@Module({
    controllers:[/**controllers... */],
    providers:[/**services */],
    exports:[/**here write those services,interfaces,controllers,etc which u want to be used by other modules */],
    imports:[/**vice versa */],
})

export class Api1Module{}

/**Also import this in the App Module! */