import AppHeaderBar from "./AppHeaderBar";
import AppSideBar from "./AppSideBar";

import { useDisclosure } from "@chakra-ui/react";

const AppHeaderSideBarContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <AppSideBar isOpen={isOpen} onClose={onClose} />
      <AppHeaderBar onOpen={onOpen} />
    </>
  );
};

export default AppHeaderSideBarContainer;
