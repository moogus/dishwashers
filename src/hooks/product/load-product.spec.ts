import { useDispatch, useSelector } from "react-redux";
import { mocked } from "ts-jest/utils";

import { loadProduct } from "../../redux/actions/product";

import useLoadProduct from "./load-product";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn((f) => { f(); }),
}));
jest.mock("react-redux");
jest.mock("../../redux/actions/product");

describe("useLoadProduct hook", () => {
  const dispatch = jest.fn().mockImplementation((x) => x);
  let result: { loading: boolean; error: boolean; };
  beforeAll(() => {
    mocked(useSelector).mockClear();
    mocked(useDispatch).mockClear();
    mocked(loadProduct).mockClear();
    mocked(useDispatch).mockReturnValue(dispatch);
    mocked(useSelector).mockReturnValue({ loading: true, error: false, foo: "bar" });
    mocked(loadProduct);
    result = useLoadProduct("foo-bar");
  });

  test("useSelector is called", () => expect(useSelector).toHaveBeenCalled());

  test("useDispatch is called", () => expect(useDispatch).toHaveBeenCalled());

  test("dispatch is called", () => expect(dispatch).toHaveBeenCalled());

  test("loadProduct action is called", () => expect(loadProduct).toHaveBeenCalledWith("foo-bar"));

  test("returned hook values are only loading and error", 
    () => expect(result).toEqual({loading: true, error: false}));
});
