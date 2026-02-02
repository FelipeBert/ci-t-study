export class ListService {
    static async getList(): Promise<string[]> {
        return ['item1', 'item2', 'item3'];
    }
}