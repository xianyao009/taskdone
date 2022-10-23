import GetStartedButton from "../elements/GetStartedButton";
import SignInButton from "../elements/SignInButton";
import { Container, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const HomeContainer = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack align={"center"} py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
            lineHeight={"150%"}
            textAlign={"center"}
          >
            Get your work done
            <Text>with ✅ Taskdone</Text>
          </Heading>
          <HStack pt={5}>
            <GetStartedButton />
            <SignInButton />
          </HStack>
        </Stack>
      </Container>
    </>
  );
};

export default HomeContainer;
