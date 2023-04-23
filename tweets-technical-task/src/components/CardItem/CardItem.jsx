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
  Button,
} from "./CardItem.styled";
import logo from "../../images/logo.svg";
import image from "../../images/image.png";

export const CardItem = ({user}) => {
    const {name,tweets,followers,avatar} = user;
  return (
    <Item>
      <Card>
        <CardLogo src={logo} alt="goit-logo" />
        <CardImage src={image} alt="bg-image" />
        <Line />
        <AvatarBorder>
          <Avatar src={avatar} alt={name} />
        </AvatarBorder>
        <StatisticList>
          <StatisticItem>{tweets} Tweets</StatisticItem>
          <StatisticItem>{followers} Followers</StatisticItem>
        </StatisticList>
        <Button type="button">follow</Button>
      </Card>
    </Item>
  );
};
