import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialMediaIconButton from "../elements/SocialMediaIconButton";
import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Divider
        pt={16}
        borderColor={useColorModeValue("gray.300", "gray.700")}
      />
      <Container
        as={Stack}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        py={5}
      >
        <Text fontSize="sm" color="gray.400">
          © {new Date().getFullYear()} Xian Yao Ng. All rights reserved.
        </Text>
        <Stack justify="space-between" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <SocialMediaIconButton
              linkTo="https://www.linkedin.com/in/xianyaong"
              socialMedia="linkedin"
              Icon={FaLinkedin}
              iconSize="1.25rem"
              tooltip="LinkedIn"
            />
            <SocialMediaIconButton
              linkTo="https://www.github.com/xianyao009"
              socialMedia="github"
              Icon={FaGithub}
              iconSize="1.25rem"
              tooltip="GitHub"
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
