import AppSideBarItem from "../elements/AppSideBarItem";

import { Drawer, DrawerContent } from "@chakra-ui/react";

type AppSideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AppSideBar = ({ isOpen, onClose }: AppSideBarProps) => {
  return (
    <>
      <AppSideBarItem
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <AppSideBarItem onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppSideBar;
