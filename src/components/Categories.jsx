import styled from "styled-components";
import { categories } from "../Data";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item, index) => {
        return <CategoryItem key={index} item={item} />;
      })}
    </Container>
  );
};

export default Categories;
