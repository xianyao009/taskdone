import Link from "next/link";
import { Button, Image, Text, Heading } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Heading as="h1">
      <Link href="/">
        <a>
          <Text color="black" fontSize={22} fontWeight="bold">
            ✅ Taskdone
          </Text>
        </a>
      </Link>
    </Heading>
  );
};

export default Logo;
