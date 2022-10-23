import { ReactNode } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

type HamburgerMenuProps = {
  children: ReactNode;
};

const HamburgerMenu = ({ children }: HamburgerMenuProps) => {
  return (
    <Box display={{ base: "inline-block", md: "none" }}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>{children}</MenuList>
      </Menu>
    </Box>
  );
};

export default HamburgerMenu;
