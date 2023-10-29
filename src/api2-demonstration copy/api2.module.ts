import { Module } from "@nestjs/common";
import { Api1Module } from "src/api1-demonstration/api1.module";

@Module({
    controllers:[/**controllers... */],
    providers:[/**services */],
    exports:[/**here write those services,interfaces,controllers,etc which u want to be used by other modules */],
    imports:[/**vice versa */Api1Module /**Can import other modules as well! */],
})

export class Api2Module{}

/**Also import this in the App Module! */

/**
 * import { Module } from "@nestjs/common";
import { Api1Module } from "src/api1-demonstration/api1.module";
@Global()
@Module({
    // controllers:[/**controllers... */]
    providers:[/**services */]
    exports:[/**here write those services,interfaces,controllers,etc which u want to be used by other modules */]
    imports:[/**vice versa */Api1Module /**Can import other modules as well! */]
// })

// export class Api2Module{}

/**Also import this in the App Module! */