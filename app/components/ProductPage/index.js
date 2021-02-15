import React from 'react';
import { string } from 'prop-types';
import { useNavigate } from '@reach/router';

import PortraitProductPage from 'components/ProductPage/PortraitProductSection';
import LandscapeProductPage from 'components/ProductPage/LanscapeProductSection';

import useLoadProduct from 'hooks/product/load-product';
import useGetProduct from 'hooks/product/get-product';

import {
  H1,
  NavigateBackButton,
  Loader,
  PageContainer,
} from './styled';

const ProductPage = ({ productId }) => {
  const { loading } = useLoadProduct(productId);
  const { title, code } = useGetProduct();
  const navigate = useNavigate();

  return loading ? (
    <Loader>Loading Dishwashers</Loader>
  ) : (
    <PageContainer>
      <header>
      <div className="d-flex justify-content-start">
        <NavigateBackButton onClick={() => navigate('/')}>&#8249;</NavigateBackButton>
        <H1 className="pt-4 pb-4">{title}</H1>
      </div>
      </header>
      <main>
        <section>
          {/* portrait on ipad */}
          <PortraitProductPage code={code}/>

          {/* landscape on ipad */}
          <LandscapeProductPage code={code}/>
        </section>
      </main>
    </PageContainer>
  );
};

ProductPage.propTypes = { productId: string };

export default ProductPage;
