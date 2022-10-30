import Logo from "../elements/Logo";
import LinkContainer from "../containers/LinkContainer";
import GetStartedButton from "../elements/GetStartedButton";
import SignInButton from "../elements/SignInButton";
import MenuIconButton from "../elements/MenuIconButton";
import MenuItemComponent from "../elements/MenuItemComponent";
import { HamburgerIcon } from "@chakra-ui/icons";
import ColorModeToggleButton from "../elements/ColorModeToggleButton";
import {
  Box,
  Divider,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

const NavigationBar = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} p={5}>
        <LinkContainer linkTo="/" target="_self">
          <Logo fontSize={28} />
        </LinkContainer>
        <HStack>
          <Box display={{ base: "none", md: "flex" }}>
            <SignInButton buttonVariant="ghost" />
            <GetStartedButton />
          </Box>
          <Box pl={5}>
            <ColorModeToggleButton />
          </Box>
          <Box display={{ base: "inline-block", md: "none" }}>
            <MenuIconButton icon={<HamburgerIcon />} label="Menu">
              {<MenuItemComponent linkTo="/signin" elementString="Sign In" />}
              {
                <MenuItemComponent
                  linkTo="/signup"
                  elementString="Get Started"
                />
              }
            </MenuIconButton>
          </Box>
        </HStack>
      </Flex>
      <Divider borderColor={useColorModeValue("gray.300", "gray.700")} />
    </>
  );
};

export default NavigationBar;
