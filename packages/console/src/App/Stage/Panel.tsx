import {
  BsArrow90DegRight,
  BsTerminalFill,
  BsFillLightningChargeFill,
  BsPeopleFill,
  BsStack,
} from "react-icons/bs";
import { Stack } from "~/components/Stack";
import { styled } from "~/stitches.config";
import { NavLink } from "react-router-dom";

const Root = styled("div", {
  background: "$loContrast",
  flexShrink: 0,
  width: "101px",
  borderRight: "1px solid $border",
});

const Menu = styled(Stack, {});

const MenuItem = styled(NavLink, {
  height: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderLeft: "2px solid transparent",
  color: "$hiContrast",

  "&.active": {
    borderColor: "$highlight",
    color: "$highlight",
  },

  "& svg": {
    display: "block",
    width: "22px",
    height: "22px",
  },
});

const MenuLabel = styled("div", {
  fontSize: "$sm",
  fontWeight: 600,
  marginTop: "$sm",
});

export function Panel() {
  return (
    <Root>
      <Menu space="0">
        <MenuItem to="local">
          <BsTerminalFill />
          <MenuLabel>Local</MenuLabel>
        </MenuItem>
        <MenuItem to="stacks">
          <BsStack />
          <MenuLabel>Stacks</MenuLabel>
        </MenuItem>
        <MenuItem to="functions">
          <BsFillLightningChargeFill />
          <MenuLabel>Functions</MenuLabel>
        </MenuItem>
        <MenuItem to="cognito">
          <BsPeopleFill />
          <MenuLabel>Cognito</MenuLabel>
        </MenuItem>
      </Menu>
    </Root>
  );
}