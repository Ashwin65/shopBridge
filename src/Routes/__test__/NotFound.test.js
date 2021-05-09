import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import history from '../history';
import { PageNotFound } from '../NotFound';
const pushSpy = jest.spyOn(history, 'back');

describe('Test for NotFound', () => {
  it('Snapshot should Match', () => {
    const container = mount(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});



describe('Testing functions of not found', () => {
  const container = shallow(<PageNotFound  />);
  const testInstance = container.instance();
  it('should test the handleclick function when user is a super admin', () => {
    testInstance.handleClick();
    expect(pushSpy).toHaveBeenCalled();
  });
});
