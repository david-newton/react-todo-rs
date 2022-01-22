export const CREATE_TASK = 'CREATE_TASK';
export const createTask = data => ({
    type: CREATE_TASK,
    payload: { data }
});

export const REMOVE_TASK = 'REMOVE_TASK';
export const removeTask = data => ({
    type: REMOVE_TASK,
    payload: { data }
});

export const COMPLETE_TASK = 'COMPLETE_TASK';
export const completeTask = data => ({
    type: COMPLETE_TASK,
    payload: { data }
});

export const COMPLETE_ALL = 'COMPLETE_ALL';
export const completeAll = data => ({
    type: COMPLETE_ALL,
    patload: {}
});

