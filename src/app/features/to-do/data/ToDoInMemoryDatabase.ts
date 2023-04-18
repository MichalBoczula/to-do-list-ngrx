
import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { ToDoModel } from "../model/ToDoModel";

@Injectable({
    providedIn: "root"
})
export class ToDoInMemoryDatabase implements InMemoryDbService {

    createDb() {
        const toDoList: ToDoModel[] = [
            {
                id: 1,
                status: true,
                title: 'sleep',
                desc: 'waste of time'
            },
            {
                id: 2,
                status: true,
                title: 'wake up',
                desc: 'coffee time'
            },
            {
                id: 3,
                status: true,
                title: 'program',
                desc: 'create some app'
            },
            {
                id: 4,
                status: false,
                title: 'exercise',
                desc: 'kick enemies in the face'
            },
            {
                id: 5,
                status: false,
                title: 'learn',
                desc: 'how to programming better'
            },
        ];

        return { toDoList };
    }
}