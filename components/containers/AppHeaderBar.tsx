import ColorModeToggleButton from "../elements/ColorModeToggleButton";
import MenuIconButton from "../elements/MenuIconButton";
import MenuItemComponent from "../elements/MenuItemComponent";
import { CgProfile } from "react-icons/cg";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

type AppHeaderBarProps = {
  onOpen: () => void;
};

const AppHeaderBar = ({ onOpen }: AppHeaderBarProps) => {
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        height="20"
      >
        <Box display={{ base: "inline-block", md: "none" }}>
          <Button
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            onClick={onOpen}
          />
        </Box>
        <HStack spacing={5}>
          <ColorModeToggleButton />
          <MenuIconButton
            icon={<CgProfile fontSize={"2.25rem"} />}
            label="Profile"
          >
            <MenuItemComponent linkTo="/settings" elementString="Settings" />
            <MenuItemComponent linkTo="/" elementString="Log out" />
          </MenuIconButton>
        </HStack>
      </Flex>
    </>
  );
};

export default AppHeaderBar;
