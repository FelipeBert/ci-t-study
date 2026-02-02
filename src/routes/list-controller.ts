import { Controller, Get } from "@nestjs/common";
import { ListService } from "../services/list-service";

@Controller()
export class ListController {
    @Get()
    async getList(): Promise<string[]> {
        return JSON.parse(JSON.stringify(await ListService.getList()));
    }
}