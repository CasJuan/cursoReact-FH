interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }


export const getTaskInitialState = (): TaskState => {

    const localStorageState = localStorage.getItem('task-state');

    if (!localStorageState) {
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0,
        }
    }

    return JSON.parse(localStorageState);
}

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };

            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1,  
            };
        }
        case "TOGGLE_TODO": {
                const updateTodos = state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo;
                });

                return {
                    ...state,
                    todos: updateTodos,
                    completed: updateTodos.filter(todo => todo.completed).length,
                    pending: updateTodos.filter(todo => !todo.completed).length,
                }
            }
        case "DELETE_TODO": {
            const currentsTodos = state.todos.filter((todo) => todo.id !== action.payload)

            //const completeTodos = currentsTodos.filter(todo => todo.completed).length,
            //const pendingTodos = currentsTodos.length - completeTodos;

            return {
                ...state,
                todos: currentsTodos,
                length: currentsTodos.length,
                completed: currentsTodos.filter(todo => todo.completed).length,
                pending: currentsTodos.filter(todo => !todo.completed).length,

            }
        }
        default:
            return state;
    }

}