import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Tooltip
      hasArrow
      label={useColorModeValue("Enable dark mode", "Disable dark mode")}
      openDelay={500}
    >
      <IconButton
        aria-label="Toggle color mode"
        colorScheme={useColorModeValue("purple", "orange")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
    </Tooltip>
  );
};

export default ColorModeToggleButton;
