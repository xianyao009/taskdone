import LinkContainer from "../containers/LinkContainer";
import { IconType } from "react-icons";
import { IconButton, Tooltip } from "@chakra-ui/react";

type SocialMediaIconButtonProps = {
  linkTo: string;
  socialMedia: string;
  Icon: IconType;
  iconSize: string | number;
  tooltip: string;
};

const SocialMediaIconButton = ({
  linkTo,
  socialMedia,
  Icon,
  iconSize,
  tooltip,
}: SocialMediaIconButtonProps) => {
  return (
    <LinkContainer linkTo={linkTo} target="_blank">
      <Tooltip
        hasArrow
        label={tooltip}
        openDelay={500}
      >
        <IconButton
          aria-label={socialMedia}
          icon={<Icon fontSize={iconSize} />}
        />
      </Tooltip>
    </LinkContainer>
  );
};

export default SocialMediaIconButton;
