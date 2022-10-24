import { Text } from "@chakra-ui/react";

type LogoProps = {
  fontSize: number;
};

const Logo = ({ fontSize }: LogoProps) => {
  return (
    <Text as="span" fontSize={fontSize} fontWeight="bold">
      ✅ Taskdone
    </Text>
  );
};

export default Logo;
