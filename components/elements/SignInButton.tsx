import { Button } from "@chakra-ui/react";

type SignInButtonProps = {
    buttonVariant: string;
};

const SignInButton = ({ buttonVariant }: SignInButtonProps) => {
  return (
    <Button
    variant={buttonVariant}
      size={"lg"}
      fontWeight="bold"
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
