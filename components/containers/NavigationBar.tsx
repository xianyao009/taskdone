import Logo from "../elements/Logo";
import GetStartedButton from "../elements/GetStartedButton";
import SignInButton from "../elements/SignInButton";
import ColorModeToggleButton from "../elements/ColorModeToggleButton";
import { Box, Divider, Flex, HStack, useColorModeValue } from "@chakra-ui/react";

const NavigationBar = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} p={5}>
        <Box>
          <Logo />
        </Box>
        <HStack>
          <SignInButton buttonVariant="ghost"/>
          <GetStartedButton />
          <Box pl={7}>
            <ColorModeToggleButton />
          </Box>
        </HStack>
      </Flex>
      <Divider borderColor={useColorModeValue("gray.300", "gray.700")} />
    </>
  );
};

export default NavigationBar;
