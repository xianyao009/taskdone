import LinkContainer from "../containers/LinkContainer";
import { Button } from "@chakra-ui/react";

type SignInButtonProps = {
  buttonVariant: string;
};

const SignInButton = ({ buttonVariant }: SignInButtonProps) => {
  return (
    <LinkContainer linkTo="/signin">
      <Button variant={buttonVariant} size={"lg"} fontWeight="bold">
        Sign In
      </Button>
    </LinkContainer>
  );
};

export default SignInButton;
