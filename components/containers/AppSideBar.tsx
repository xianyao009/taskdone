import AppSideBarItem from "../elements/AppSideBarItem";

import { Drawer, DrawerContent } from "@chakra-ui/react";

type AppSideBarProps = {
  isOpen: boolean;
  onClose: () => void;
  filterList: JSX.Element[];
};

const AppSideBar = ({ isOpen, onClose, filterList }: AppSideBarProps) => {
  return (
    <>
      <AppSideBarItem
        onClose={onClose}
        display={{ base: "none", md: "block" }}
        filterList={filterList}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <AppSideBarItem onClose={onClose} filterList={filterList} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppSideBar;
