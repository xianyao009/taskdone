import Logo from "../elements/Logo";
import LinkContainer from "../containers/LinkContainer";
import GetStartedButton from "../elements/GetStartedButton";
import SignInButton from "../elements/SignInButton";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerMenuElement from "../elements/HamburgerMenuElement";
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
        <LinkContainer linkTo="/">
          <Logo fontSize={22} />
        </LinkContainer>
        <HStack>
          <Box display={{ base: "none", md: "flex" }}>
            <SignInButton buttonVariant="ghost" />
            <GetStartedButton />
          </Box>
          <Box pl={5}>
            <ColorModeToggleButton />
          </Box>
          <HamburgerMenu>
            {<HamburgerMenuElement linkTo="/signin" elementString="Sign In" />}
            {
              <HamburgerMenuElement
                linkTo="/signup"
                elementString="Get Started"
              />
            }
          </HamburgerMenu>
        </HStack>
      </Flex>
      <Divider borderColor={useColorModeValue("gray.300", "gray.700")} />
    </>
  );
};

export default NavigationBar;
