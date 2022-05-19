import { Box, Text, Stack, Image, useColorModeValue } from "@chakra-ui/react";

interface CountrySingleInfoProps {
  capital: string;
  bannerCard: string;
  nameCard: string;
  flag: string;
}

export function CountrySingleInfo({
  capital,
  bannerCard,
  nameCard,
  flag,
}: CountrySingleInfoProps) {
  const border = useColorModeValue("#FFBA0880", "#fff");
  const bg = useColorModeValue("#fff", "#1a202c");
  const color = useColorModeValue("#47585B", "#fff");
  const regionColor = useColorModeValue("#999999", "#fff");
  return (
    <>
      <Stack background={bg} maxW="256px">
        <Box>
          <Image
            src={bannerCard}
            borderTopLeftRadius={"md"}
            borderTopRightRadius={"md"}
            alt="Imagem do Banner"
            w="256px"
            h="173px"
            objectFit="cover"
          />

          <Stack
            direction="row"
            justify="space-between"
            borderX="1px"
            borderBottom="1px"
            borderColor={border}
            p="4"
            align="center"
            h="100"
          >
            <Box>
              <Text
                as="strong"
                fontSize={[20]}
                lineHeight="25px"
                color={color}
                fontWeight="600"
                fontFamily="Barlow"
              >
                {capital}
              </Text>
              <Text
                color={regionColor}
                fontFamily="Barlow"
                fontSize={[16]}
                mt="1"
              >
                {nameCard}
              </Text>
            </Box>
            <Box>
              <Image
                src={flag}
                w="30px"
                h="30px"
                borderRadius="full"
                objectFit="cover"
                alt="Bandeira"
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
