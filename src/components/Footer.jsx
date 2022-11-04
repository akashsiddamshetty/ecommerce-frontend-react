import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none",
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#fdf8f8",
  })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const PaymentImgage = styled.img`
  width: 250px;
  height: 50px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ECOMMERCE.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
          vero omnis repudiandae distinctio dolor architecto dicta eligendi.
          Facere, doloremque quidem. Libero quibusdam porro quasi vel harum quia
          commodi fuga eum.
        </Desc>
        <SocialContainer>
          <Icon color="3B5999">
            <FacebookIcon />
          </Icon>
          <Icon color="E4405F">
            <InstagramIcon />
          </Icon>
          <Icon color="55ACEE">
            <TwitterIcon />
          </Icon>
          <Icon color="E60023">
            <PinterestIcon />
          </Icon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whislist</ListItem>
          <ListItem>Terms And Conditons</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <LocationOnOutlinedIcon style={{ marginRight: "10px" }} /> Robert
          Robertson, 1234 NW Bobcat Lane, St. Robert
        </ContactItem>
        <ContactItem>
          <CallOutlinedIcon style={{ marginRight: "10px" }} /> +1 655845678
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />{" "}
          robert@ecommerce.com
        </ContactItem>
        <PaymentImgage src="https://www.kindpng.com/picc/m/44-440249_paypal-payment-methods-icons-hd-png-download.png" />
      </Right>
    </Container>
  );
};

export default Footer;
