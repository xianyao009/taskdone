import Logo from "../elements/Logo";
import GetStartedButton from "../elements/GetStartedButton";
import SignInButton from "../elements/SignInButton";
import ColorModeToggleButton from "../elements/ColorModeToggleButton";
import { Box, Flex, HStack } from "@chakra-ui/react";

const NavigationBar = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} p={5}>
        <Box>
          <Logo />
        </Box>
        <HStack>
          <SignInButton />
          <GetStartedButton />
          <Box pl={7}>
            <ColorModeToggleButton />
          </Box>
          
        </HStack>
      </Flex>
    </>
  );
};

export default NavigationBar;
