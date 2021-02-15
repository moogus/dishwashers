import { buildModel } from 'models/grid-item';

describe('model is built from data', () => {
  test('empty model is build as expected', () => {
    expect(buildModel()).toMatchSnapshot();
  });

  test('hydrated model is build as expected', () => {
    expect(buildModel({
      productId: 'generation game',
      price: { now: 'then' },
      title: 'good game',
      image: 'cuddly toy',
    })).toMatchSnapshot();
  });
});
