import { ReactNode } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";

type MenuIconButtonProps = {
  children: ReactNode;
  icon: JSX.Element;
  label: string;
};

const MenuIconButton = ({ children, icon, label }: MenuIconButtonProps) => {
  return (
    <Menu>
      <Tooltip hasArrow label={label} openDelay={500}>
        <MenuButton as={IconButton} icon={icon} variant="outline" />
      </Tooltip>
      <MenuList>{children}</MenuList>
    </Menu>
  );
};

export default MenuIconButton;
