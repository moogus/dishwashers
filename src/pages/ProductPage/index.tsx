import React, { FunctionComponent } from "react";
import { useNavigate } from "@reach/router";

import { ProductTitle } from "../../components/ProductTitle";
import { PortraitProductSection } from "../../components/PortraitProductSection";
import { LandscapeProductSection } from "../../components/LanscapeProductSection";

import useLoadProduct from "../../hooks/product/load-product";

import { H1, NavigateBackButton, Loader, PageContainer } from "./styled";

type ProductPageProps = {
  path: string;
  productId?: string;
};

export const ProductPage: FunctionComponent<ProductPageProps> = ({
  productId,
}) => {
  const { loading } = useLoadProduct(productId);
  const navigate = useNavigate();

  return loading ? (
    <Loader>Loading Dishwashers</Loader>
  ) : (
    <PageContainer>
      <header>
        <div className="d-flex justify-content-start">
          <NavigateBackButton onClick={() => navigate("/")}>
            &#8249;
          </NavigateBackButton>
          <ProductTitle />
          <H1 className="pt-4 pb-4">{"title"}</H1>
        </div>
      </header>
      <main>
        <section>
          {/* portrait on ipad */}
          <PortraitProductSection />

          {/* landscape on ipad */}
          <LandscapeProductSection />
        </section>
      </main>
    </PageContainer>
  );
};
