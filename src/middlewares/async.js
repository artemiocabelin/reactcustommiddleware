export default function({ dispatch }) {
    return next => action => {

        // if the action does not have a payload
        //  or the payload does not hav a .then property
        //  we don't care aobut it, send it on
        if (!action.payload || !action.payload.then) {
            return next(action)
        }

        // Make sure the action's promise resolves
        action.payload
            .then(response => {
                // create a new action with the old type, but replace the promise with the response data
                const newAction = { ...action, payload: response }
                // sends it back through the first middleware again
                dispatch(newAction)
            })
    }
}