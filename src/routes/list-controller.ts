import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { Task } from "src/model/list";
import { ListService } from "../services/list-service";
import type { CreateListDTO, DeleteListDTO, UpdateListDTO } from "./dto/in/tasks";

@Controller()
export class ListController {
    constructor(private readonly listService: ListService) {}

    @Get()
    async getList(): Promise<Task[]> {
        return this.listService.getList();
    }

    @Post()
    async addItems(@Body('taskList') taskList: CreateListDTO[]): Promise<Object> {
        return this.listService.addItems(taskList);
    }

    @Put()
    async updateItems(@Body('taskListToUpdate') taskListToUpdate: UpdateListDTO[]): Promise<Object> {
        return this.listService.updateItems(taskListToUpdate);
    }

    @Delete()
    async deleteItems(@Body('taskListToDelete') taskListToDelete: DeleteListDTO[]): Promise<Object> {
        return this.listService.deleteItems(taskListToDelete);
    }
}