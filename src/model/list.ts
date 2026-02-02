export class Task {
    id: number
    name: string
    description: string
    done: boolean

    constructor(name: string, description: string) {
        this.id = Math.floor(Math.random() * 10000)
        this.name = name
        this.description = description
        this.done = false
    }

    setDone(done: boolean) {
        this.done = done
    }
}