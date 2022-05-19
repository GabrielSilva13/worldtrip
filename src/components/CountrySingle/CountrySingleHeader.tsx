import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

interface CountrySingleHeaderProps {
  name: string;
  banner: string;
  description: string;
  countries: number;
  languages: number;
  cities: number;
}

export function CountrySingleHeader({
  name,
  banner,
  description,
  countries,
  languages,
  cities,
}: CountrySingleHeaderProps) {
  const infoNumber = useColorModeValue("#FFBA08", "#fff");
  const color = useColorModeValue("#47585B", "#fff");
  const bg = useColorModeValue("#fff", "#222a3a");
  return (
    <>
      <Box
        backgroundImage={banner}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition="center"
        p="24"
      >
        <Container m="0 auto" maxW="container.xl">
          <Stack
            h={["xm", "xm", "xl"]}
            d="flex"
            justifyContent={["center", "flex-end"]}
            alignItems={["center", "unset"]}
            direction="column"
          >
            <Text
              as="h1"
              color="#F5F8FA"
              fontSize={[28, 48]}
              fontWeight="600"
              lineHeight={["42px", "72px"]}
              fontFamily="Poppins"
            >
              {name}
            </Text>
          </Stack>
        </Container>
      </Box>
      <Container my={[34, 34, 100]} mx="auto" maxW="container.xl">
        <Stack
          direction={["column", "column", "column", "row"]}
          justify="space-between"
          align={["flex-start", "center"]}
        >
          <Box>
            <Text
              fontSize={[14, 14, 24]}
              lineHeight={["21px", "21px", "36px"]}
              maxW={["auto", "auto", "auto", "600px"]}
              fontFamily="Poppins"
              textAlign="justify"
            >
              {description}
            </Text>
          </Box>
          <Box>
            <Stack direction="row" gap={[8, 8, 12]}>
              <Box fontWeight="600" fontFamily="Poppins">
                <VStack>
                  <Text as="span" color={infoNumber} fontSize={[24, 24, 48]}>
                    {countries}
                  </Text>
                  <Text fontSize={[18, 18, 24]} color={color}>
                    países
                  </Text>
                </VStack>
              </Box>
              <Box fontWeight="600" fontFamily="Poppins">
                <VStack>
                  <Text as="span" color={infoNumber} fontSize={[24, 24, 48]}>
                    {languages}
                  </Text>
                  <Text fontSize={[18, 18, 24]} color={color}>
                    línguas
                  </Text>
                </VStack>
              </Box>
              <Box fontWeight="600" fontFamily="Poppins">
                <VStack>
                  <Text as="span" color={infoNumber} fontSize={[24, 24, 48]}>
                    {cities}
                  </Text>
                  <Text fontSize={[18, 18, 24]} color={color}>
                    cidades +100{" "}
                    <Tooltip
                      hasArrow
                      label="Cidades mais visitadas da região"
                      bg={bg}
                      color={color}
                      aria-label="A tooltip"
                      openDelay={200}
                      fontSize="md"
                      fontFamily="Poppins"
                    >
                      <InfoOutlineIcon
                        w={[2, 3, 4]}
                        h={[2, 3, 4]}
                        color={color}
                      />
                    </Tooltip>
                  </Text>
                </VStack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
