import { Box, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export function Cta() {
  const color = useColorModeValue("#DADADA", "#fff");
  return (
    <Stack
      backgroundImage="url('/background.webp')"
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      p="8"
      direction={"row"}
      align="center"
      justify="space-around"
      fontFamily="Poppins"
    >
      <Box>
        <Text
          as="h1"
          fontWeight="500"
          color={"#F5F8FA"}
          fontSize={[20, 20, 36]}
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Text>
        <Text color={color} fontSize={[14, 14, 20]}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Box position="relative" top="20" d={["none", "none", "block"]}>
        <Image src="/airplane.svg" />
      </Box>
    </Stack>
  );
}
