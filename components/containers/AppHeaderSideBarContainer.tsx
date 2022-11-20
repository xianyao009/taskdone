import AppHeaderBar from "./AppHeaderBar";
import AppSideBar from "./AppSideBar";
import { useDisclosure } from "@chakra-ui/react";

type AppHeaderSideBarContainerProps = {
  filterList: JSX.Element[];
};

const AppHeaderSideBarContainer = ({
  filterList,
}: AppHeaderSideBarContainerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <AppSideBar isOpen={isOpen} onClose={onClose} filterList={filterList} />
      <AppHeaderBar onOpen={onOpen} />
    </>
  );
};

export default AppHeaderSideBarContainer;
