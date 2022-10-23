import LinkContainer from "../containers/LinkContainer";
import { Button } from "@chakra-ui/react";

const GetStartedButton = () => {
  return (
    <LinkContainer linkTo="/signup">
      <Button
        colorScheme={"green"}
        bg={"#16c60c"}
        size={"lg"}
        fontWeight="bold"
      >
        Get Started
      </Button>
    </LinkContainer>
  );
};

export default GetStartedButton;
