import reducer from '../../reducers/item-list-reducer'
import { expect, test } from 'vitest'

// describe('item-list-reducer', () => {
test('Should return the default state if no action is passed through the reducer', () => {
    expect(reducer({}, { type: null })).toEqual({});
});
// });
