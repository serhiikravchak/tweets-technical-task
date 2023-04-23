import styled from "@emotion/styled";

export const Item = styled.li``;

export const Card = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end; */
  z-index: 1;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardLogo = styled.img`
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  z-index: 3;
`;

export const CardImage = styled.img`
  position: absolute;
  top: 20px;
  left: 36px;
  display: block;
  width: 308px;
  height: 168px;
  z-index: 2;
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  overflow: hidden;

  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
`;

export const Avatar = styled.img`
  display: block;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #5736a3;
`;

export const StatisticList = styled.ul`
  list-style: none;
  padding-top: 284px;
  padding-left: 0;
  margin-bottom: 26px;
`;

export const StatisticItem = styled.li`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Button = styled.button`
  padding: 14px 28px;

  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  /* Landing/button text color */

  color: #373737;
`;
