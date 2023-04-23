import {
  Avatar,
  Card,
  CardImage,
  CardLogo,
  Item,
  Line,
  AvatarBorder,
  StatisticItem,
  StatisticList,
  Button
} from "./CardItem.styled";
import logo from "../../images/logo.svg";
import image from "../../images/image.png";

export const CardItem = () => {
  return (
    <Item>
      <Card>
        <CardLogo src={logo} alt="goit-logo" />
        <CardImage src={image} alt="bg-image" />
        <Line />
        <AvatarBorder>
          <Avatar src="" alt="" />
        </AvatarBorder>
        <StatisticList>
          <StatisticItem>777 Tweets</StatisticItem>
          <StatisticItem>777 Followers</StatisticItem>
        </StatisticList>
        <Button type="button">follow</Button>
      </Card>
    </Item>
  );
};
