import Logo from "./Logo";
import AppSideBarLink from "./AppSideBarLink";
import {
  Box,
  CloseButton,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type AppSideBarItemProps = {
  onClose: () => void;
  display?: object;
};

const AppSideBarItem = ({ onClose, display }: AppSideBarItemProps) => {
  return (
    <>
      <Box
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        display={display}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text>
            <Logo fontSize={28} />
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <Container>
          <AppSideBarLink text="All" />
          <AppSideBarLink text="Completed" />
        </Container>
      </Box>
    </>
  );
};

export default AppSideBarItem;
