import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item, index) => {
        return <Product key={index} item={item} />;
      })}
    </Container>
  );
};

export default Products;
