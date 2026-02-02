export interface CreateListDTO {
    name: string;
    description: string;
}

export interface UpdateListDTO {
    id: number;
    name?: string;
    description?: string;
    done?: boolean;
}

export interface DeleteListDTO {
    id: number;
}