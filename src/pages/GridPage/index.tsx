import React, { FunctionComponent } from "react";

import { GridItem } from "../../components/GridItem";
import useLoadGridItems from "../../hooks/grid-items/load-grid-items";
import useGetGridItems from "../../hooks/grid-items/get-grid-items";

import { H1, Loader, PageContainer, GridContainer } from "./styled";

type GridPageProps = {
  path: string;
};

export const GridPage: FunctionComponent<GridPageProps> = () => {
  const { loading } = useLoadGridItems();
  const gridItems = useGetGridItems();

  return loading ? (
    <Loader>Loading Dishwashers</Loader>
  ) : (
    <PageContainer>
      <header>
        <H1 className="pt-5 pb-5">Dishwashers (114)</H1>
      </header>
      <main>
        <section>
          <GridContainer className="row">
            {gridItems.map((gridItem, index) => (
              <GridItem key={`gridItem-${index}`} gridItem={gridItem} />
            ))}
          </GridContainer>
        </section>
      </main>
    </PageContainer>
  );
};
