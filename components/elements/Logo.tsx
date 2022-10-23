import LinkContainer from "../containers/LinkContainer";
import { Text, Heading } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Heading as="h1">
      <LinkContainer linkTo="/">
        <Text fontSize={22} fontWeight="bold">
          ✅ Taskdone
        </Text>
      </LinkContainer>
    </Heading>
  );
};

export default Logo;
