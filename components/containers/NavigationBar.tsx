import Logo from "../elements/Logo";
import GetStartedButton from "../elements/GetStartedButton";
import { Box, Button, Flex } from "@chakra-ui/react";

const NavigationBar = () => {
  return (
    <>
      <Flex
        bg="white"
        alignItems={"center"}
        justifyContent={"space-between"}
        p={5}
      >
        <Box>
          <Logo />
        </Box>
        <GetStartedButton />
      </Flex>
    </>
  );
};

export default NavigationBar;
