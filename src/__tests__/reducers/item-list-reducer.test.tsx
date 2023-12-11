import { reducer, ActionObject } from '../../reducers/item-list-reducer'
import { expect, test, describe } from 'vitest'
// import { ItemData } from '../../components/Body'

describe('item-list-reducer', () => {

    let action: ActionObject;
    const itemData = {
        quantity: 5,
        price: 5,
        image: "picture",
        title: "new item",
        description: "a new item",
        id: "5555T",
    }

    const currentState = {
        "1": {
            quantity: 5,
            price: 5,
            image: "picture",
            title: "new item",
            description: "a new item",
            id: "1",
        },
        "2": {
            quantity: 5,
            price: 5,
            image: "picture",
            title: "second item",
            description: "another new item",
            id: "2",
        }
    }
    test('Should return the default state if no action is passed through the reducer', () => {

        expect(reducer({}, {
            type: null,
            quantity: 5,
            price: 5,
            image: "picture",
            title: "new item",
            description: "a new item",
            id: "5555T",
        })).toEqual({});
    });

    test('Should successfully add new item data to itemList', () => {
        const { quantity, price, image, title, description, id } = itemData;
        action = {
            type: 'ADD_ITEM',
            quantity: quantity,
            price: price,
            image: image,
            title: title,
            description: description,
            id: id,
        };



        expect(reducer({}, action)).toEqual({
            [id]: {
                quantity: quantity,
                price: price,
                image: image,
                title: title,
                description: description,
                id: id
            }
        });
    })

    test('Should successfully delete an item from itemList', () => {
        action = {
            type: "DELETE_ITEM",
            quantity: 5,
            price: 5,
            image: "picture",
            title: "new item",
            description: "a new item",
            id: "1",
        };

        expect(reducer(currentState, action)).toEqual({
            "2": {
                quantity: 5,
                price: 5,
                image: "picture",
                title: "second item",
                description: "another new item",
                id: "2",
            }
        })
    });
});