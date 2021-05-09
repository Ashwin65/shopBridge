import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import CreateItem from "../index";

const mockStore = configureMockStore();

const store = mockStore({});

let wrapper;

const setModalState = jest.fn()

beforeEach(() => {
    wrapper = shallow(<Provider store={store}><CreateItem/></Provider>);
});

describe('Create Item Page Snapshot', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
})