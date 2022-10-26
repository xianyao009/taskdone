import LinkContainer from "../containers/LinkContainer";
import { MenuItem } from "@chakra-ui/react";

type HamburgerMenuElementProps = {
  linkTo: string;
  elementString: string;
};

const HamburgerMenuElement = ({
  linkTo,
  elementString,
}: HamburgerMenuElementProps) => {
  return (
    <LinkContainer linkTo={linkTo} target="_self">
      <MenuItem>{elementString}</MenuItem>
    </LinkContainer>
  );
};

export default HamburgerMenuElement;
