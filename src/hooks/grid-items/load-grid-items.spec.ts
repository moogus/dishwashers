import { useDispatch, useSelector } from "react-redux";
import { mocked } from "ts-jest/utils";

import { loadProductGrid} from "../../redux/actions/grid";

import useLoadGridItems from "./load-grid-items";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn((f) => { f(); }),
}));
jest.mock("react-redux");
jest.mock("../../redux/actions/grid");

describe("useGetGridItems hook", () => {
  const dispatch = jest.fn().mockImplementation((x) => x);
  let result: { loading: boolean; error: boolean; };
  beforeAll(() => {
    mocked(useSelector).mockClear();
    mocked(useDispatch).mockClear();
    mocked(loadProductGrid).mockClear();
    mocked(useDispatch).mockReturnValue(dispatch);
    mocked(useSelector).mockReturnValue({ loading: true, error: false, foo: "bar" });
    mocked(loadProductGrid);
    result = useLoadGridItems();
  });

  test("useSelector is called", () => expect(useSelector).toHaveBeenCalled());

  test("useDispatch is called", () => expect(useDispatch).toHaveBeenCalled());

  test("dispatch is called", () => expect(dispatch).toHaveBeenCalled());

  test("loadProductGrid action is called", () => expect(loadProductGrid).toHaveBeenCalled());

  test("returned hook values are only loading and error", 
    () => expect(result).toEqual({loading: true, error: false}));
});
