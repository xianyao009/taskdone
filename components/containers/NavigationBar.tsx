import Logo from "../elements/Logo";
import { Box, Button, Flex} from "@chakra-ui/react";

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
        <Button variant={"solid"} colorScheme={"green"} size={"md"}>
            Get Started
        </Button>
      </Flex>
    </>
  );
};

export default NavigationBar;
