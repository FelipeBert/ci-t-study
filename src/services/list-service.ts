import { CreateListDTO, DeleteListDTO, UpdateListDTO } from 'src/routes/dto/in/tasks';
import { Task } from '../model/list';

export class ListService {
    private taskList: Task[] = []

    async getList(): Promise<Task[]> {
        return this.taskList;
    }

    async addItems(taskList: CreateListDTO[]) {
        taskList.forEach((item) => {
            const newItem = new Task(item.name, item.description);
            this.taskList.push(newItem);
        });

        return {
            status: 201,
            message: 'Task(s) added successfully'
        }
    }

    async updateItems(taskListToUpdate: UpdateListDTO[]) {
        this.taskList = this.taskList.map((item) => {
            const itemsToUpdate = taskListToUpdate.find((itemUp) => itemUp.id === item.id);
            return itemsToUpdate ? Object.assign(item, itemsToUpdate) : item;
        })

        return {
            message: 'Task(s) updated successfully'
        }
    }

    async deleteItems(taskListToDelete: DeleteListDTO[]) {
        const idsToRemove = taskListToDelete.map(dto => dto.id);
        this.taskList = this.taskList.filter(item => !idsToRemove.includes(item.id));
        return {
            message: 'Task(s) deleted successfully'
        }
    }
}