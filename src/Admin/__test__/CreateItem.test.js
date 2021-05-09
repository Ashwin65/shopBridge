import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import CreateItem from "../CreateItem";

const mockStore = configureMockStore();

const store = mockStore({});

let wrapper;

const setModalState = jest.fn()

beforeEach(() => {
    wrapper = mount(<Provider store={store}><CreateItem setModalState={setModalState}/></Provider>);
});

describe('Create Item Page Snapshot', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('It should test the onclick event of the functions' , ()=>{
        // const setModalState = jest.fn();
        // const useStateSpy = jest.spyOn(React, "useState");
        // useStateSpy.mockImplementation(({}) => [
        //   {},
        //   setModalState,
        // ]);


        let showModal= jest.fn()
        // console.log(wrapper.d)
        wrapper.find('#AddItemButton').at(0).simulate('click');
        expect(setModalState).toHaveBeenCalled()
    })
})