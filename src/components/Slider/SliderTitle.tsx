import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export function SliderTitle() {
  const color = useColorModeValue("#47585B", "#fff");
  return (
    <Box textAlign="center" my={[22, 32]} fontFamily="Poppins">
      <Text
        as="strong"
        lineHeight="54px"
        fontSize={[20, 20, 36]}
        fontWeight="500"
        color={color}
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Text>
    </Box>
  );
}
