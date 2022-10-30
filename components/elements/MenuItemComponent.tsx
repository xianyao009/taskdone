import LinkContainer from "../containers/LinkContainer";
import { MenuItem } from "@chakra-ui/react";

type MenuItemComponentProps = {
  linkTo: string;
  elementString: string;
};

const MenuItemComponent = ({
  linkTo,
  elementString,
}: MenuItemComponentProps) => {
  return (
    <LinkContainer linkTo={linkTo} target="_self">
      <MenuItem>{elementString}</MenuItem>
    </LinkContainer>
  );
};

export default MenuItemComponent;
