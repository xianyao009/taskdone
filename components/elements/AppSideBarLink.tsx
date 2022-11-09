import LinkContainer from "../containers/LinkContainer";
import { Button } from "@chakra-ui/react";

type AppSideBarLinkProps = {
  text: String;
};

const AppSideBarLink = ({ text }: AppSideBarLinkProps) => {
  return (
    <>
      <LinkContainer linkTo="" target="_self">
        <Button w="90%" variant="ghost">
          {text}
        </Button>
      </LinkContainer>
    </>
  );
};

export default AppSideBarLink;
