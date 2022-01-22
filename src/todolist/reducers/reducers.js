import { COMPLETE_ALL, COMPLETE_TASK, CREATE_TASK, REMOVE_TASK } from "../actions/actions";

export const todolist = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TASK: {
            const { data } = payload;
            //Ignore empty string entries
            if(!data) {
                return state;
            }
            const newItem = {
                data,
                isComplete: false
            };
            //TODO -- probably cleaner to use spread here
            return state.concat(newItem);
        }
        case REMOVE_TASK: {
            const { data } = payload;
            const filteredState = state.filter(item => item.data !== data);

            return filteredState;
        }
        case COMPLETE_TASK: {
            const { data } = payload;
            return state.map(item => {
                if (item.data === data) {
                    return {...item, isComplete: true};
                }
                return item;
            });
        }
        case COMPLETE_ALL: {
            return state.map(item => {
                if (!item.isComplete) {
                    return {...item, isComplete: true}
                }
                return item;
            })
        }
        default:
            return state;
    }
}