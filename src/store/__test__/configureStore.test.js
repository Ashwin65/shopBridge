import { store } from '../configureStore';

describe('Testing configure store', () => {
  it('Should match the snapshot', () => {
    const container = store;
    expect(container).toMatchSnapshot();
  });
});
  