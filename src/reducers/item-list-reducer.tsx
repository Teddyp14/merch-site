export const reducer = (state = {}, action: ActionObject) => {
    const { quantity, price, image, title, description, id } = action;
    switch (action.type) {
        case 'ADD_ITEM':
            return Object.assign({}, state, {
                [id]: {
                    quantity: quantity,
                    price: price,
                    image: image,
                    title: title,
                    description: description,
                    id: id
                }
            });
        case 'DELETE_ITEM':
            let newState: NewState = { ...state };

            if (newState.hasOwnProperty(id)) {
                delete newState[id];
            }
            return newState;
        default:
            return state;
    }
};

export interface ActionObject {
    type: string | null,
    quantity: number | null,
    price: number | null,
    image: string | null,
    title: string | null,
    description: string | null,
    id: string
}

interface NewState {
    [id: string]: {
        quantity: number
        price: number
        image: string
        title: string
        description: string
        id: string
    }
}
