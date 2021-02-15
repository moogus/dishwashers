import { buildModel } from 'models/product';

describe('model is built from data', () => {
  test('empty model is build as expected', () => {
    expect(buildModel()).toMatchSnapshot();
  });

  test('hydrated model is build as expected', () => {
    expect(buildModel({
      title: 'come a long way',
      media: {
        images: {
          alText: 'foo',
          urls: ['1'],
        },
      },
      price: { now: 'right here' },
      details: {},
      displaySpecialOffer: '',
      additionalServices: {},
      code: '1234',
    })).toMatchSnapshot();
  });
});
