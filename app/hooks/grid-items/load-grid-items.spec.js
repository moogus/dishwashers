import { useDispatch, useSelector } from 'react-redux';
import { loadProductGrid } from 'actions/grid';

import useLoadGridItems from 'hooks/grid-items/load-grid-items';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn((f) => { f(); }),
}));
jest.mock('react-redux');
jest.mock('actions/grid');

describe('useGetGridItems hook', () => {
  const dispatch = jest.fn().mockImplementation((x) => x);
  beforeAll(() => {
    jest.clearAllMocks();
    loadProductGrid.mockReturnValue('hi');
    useSelector.mockReturnValue({ loading: true, error: false });
    useDispatch.mockReturnValue(dispatch);
    useLoadGridItems();
  });

  test('useSelector is called', () => expect(useSelector).toHaveBeenCalled());

  test('useDispatch is called', () => expect(useSelector).toHaveBeenCalled());

  test('dispatch is called', () => expect(dispatch).toHaveBeenCalledWith('hi'));

  test('loadProductGrid action is called', () => expect(loadProductGrid).toHaveBeenCalled());
});
