export interface TodoDto {
    id: number;
    title: string;
    status: TodoStatus
}
export enum TodoStatus {
    Done,
    Pending
}