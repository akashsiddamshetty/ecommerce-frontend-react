import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  width: 100vw;
  height: 100vh;
  ${mobile({
    padding: "10px",
    flexDirection: "column",
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height: "40vh",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 5px;
  padding: 5px;
  cursor: pointer;
`;
const FilterSizeOption = styled.option`
  cursor: pointer;
`;
const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  cursor: pointer;
`;
const Amount = styled.span`
  margin: 0px 5px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Product = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + productId);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [productId]);

  return (
    <>
      <Announcement />
      <Navbar />
      {Object.keys(product).length === 0 ? (
        "Loading..."
      ) : (
        <Wrapper>
          <ImageContainer>
            <Image src={product?.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>${product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product?.color?.map((color, index) => {
                  return (
                    <FilterColor
                      color={color}
                      key={index}
                      onClick={() => setColor(color)}
                    />
                  );
                })}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product?.size?.map((size, index) => {
                    return (
                      <FilterSizeOption
                        key={index}
                        value={size}
                      >
                        {size.toUpperCase()}
                      </FilterSizeOption>
                    );
                  })}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <RemoveIcon onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <AddIcon onClick={() => handleQuantity("inc")} />
              </AmountContainer>
              <Button onClick={() => handleAddToCart()}>Add To Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
