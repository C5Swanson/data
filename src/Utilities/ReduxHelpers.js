
function handleAction(actionType, state, action, handlers) {
    try {
        return handlers[actionType](state, action);
    }
    catch (ex) {
        console.log(`${ex}`); // eslint-disable-line
        console.log(`${action.type} not found on redux handler`); // eslint-disable-line
        console.log(handlers); // eslint-disable-line
        throw ex;
    }
}

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
            return handleAction(action.type, state, action, handlers);
        }
        else if (Object.prototype.hasOwnProperty.call(handlers, "*")) {
            return handleAction("*", state, action, handlers);
        }
        else {
            return state;
        }
    };
}