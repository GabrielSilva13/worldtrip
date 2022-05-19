import { Image, Stack, Box, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ColorSwitcher } from "../ColorModeSwitcher/ColorSwitcher";

export function Logo() {
  return (
    <Stack
      align={"center"}
      justify={"center"}
      p={5}
      maxW="container.xl"
      m="0 auto"
      direction={"row"}
      gap={[7, 20]}
    >
      <Link href={"/"} passHref>
        <Box
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          transition="0.3s linear"
        >
          <Image src="/logo.svg" cursor={"pointer"} />
        </Box>
      </Link>

      <ColorSwitcher />
    </Stack>
  );
}
