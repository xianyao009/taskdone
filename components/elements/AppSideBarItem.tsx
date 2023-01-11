import Logo from "./Logo";
import {
  Box,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import LinkContainer from "../containers/LinkContainer";

type AppSideBarItemProps = {
  onClose: () => void;
  display?: object;
  filterList: JSX.Element[];
};

const AppSideBarItem = ({
  onClose,
  display,
  filterList,
}: AppSideBarItemProps) => {
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
          <LinkContainer linkTo="/" target="_self">
            <Logo fontSize={28} />
          </LinkContainer>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <VStack>{filterList}</VStack>
      </Box>
    </>
  );
};

export default AppSideBarItem;
