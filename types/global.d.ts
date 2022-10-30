export {};

declare global {
  interface ITodoType {
    _id: string;
    title: string;
    description: string;
    priority: String;
    completed: boolean;
    createdOn: Date;
  }
}
