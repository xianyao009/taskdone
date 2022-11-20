import Logo from "./Logo";
import {
  Box,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

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
          <Text>
            <Logo fontSize={28} />
          </Text>
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
