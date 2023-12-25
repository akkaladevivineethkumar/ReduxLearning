import { createSlice } from '@reduxjs/toolkit';
// utils
// import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
    isLoading: false,
    error: null,
    todos: []
};

const slice = createSlice({
    name: 'todo-list',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state) {
            state.isLoading = true;
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addTodo(state, action) {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTodo(state, action) {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

    },
});

// Reducer
export default slice.reducer;

// Actions

export const { startLoading, hasError, addTodo, toggleTodo } = slice.actions;

// ----------------------------------------------------------------------

// export function getLabels() {
//     return async (dispatch) => {
//         dispatch(slice.actions.startLoading());
//         try {
//             const response = await axios.get('/api/mail/labels');
//             dispatch(slice.actions.getLabelsSuccess(response.data.labels));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

