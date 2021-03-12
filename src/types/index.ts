export type GridItem = {
  productId: string;
  price: string;
  title: string;
  image: string;
};

export type AdditionalServices = {
  includedServices: string[];
}

export type Product = {
  title: string;
  media: Images,
  price: string;
  productInformation: string;
  displaySpecialOffer: string;
  additionalServices: AdditionalServices;
  code: string;
}

export type Price = {
  now?: string
}

export type ApiGridItem = {
  productId: string;
  price: Price;
  title: string;
  image: string;
}

export type Images = {
  altText: string;
  urls: string[]
}

export type Media = {
  images: Images;
}

export type Details = {
  productInformation: string;
}

export type ApiProduct = {
  title : string;
  media: Media;
  price?: Price;
  details?: Details;
  displaySpecialOffer : string;
  additionalServices: AdditionalServices;
  code : string;
}