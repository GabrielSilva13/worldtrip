import { useRouter } from "next/router";
import { CountrySingleHeader } from "./CountrySingleHeader";
import { CountrySingleInfo } from "./CountrySingleInfo";
import { Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";

interface CountrySingleProps {
  name: string;
  banner: string;
  description: string;
  countries: number;
  languages: number;
  cities: number;
  capital: string;
  bannerCard: string;
  nameCard: string;
  flag: string;
  famous: [capital: string, banner: string, name: string, flag: string];
}

export function CountrySingle({
  name,
  banner,
  description,
  countries,
  languages,
  cities,
  capital,
  bannerCard,
  nameCard,
  flag,
  famous,
}: CountrySingleProps) {
  const router = useRouter();
  const { id } = router.query;
  const color = useColorModeValue("#47585B", "#fff");
  return (
    <>
      <CountrySingleHeader
        name={name}
        banner={banner}
        description={description}
        countries={countries}
        languages={languages}
        cities={cities}
      />
      <Container maxW="container.xl" mb="6">
        <Text
          as="strong"
          fontSize={[24, 24, 36]}
          lineHeight={["34px", "34px", "54px"]}
          fontWeight="500"
          color={color}
          fontFamily="Poppins"
        >
          Cidades +100
        </Text>
      </Container>
      <Container m="0 auto" maxW="container.xl">
        <Stack
          direction="row"
          wrap="wrap"
          gap={[5, 5, 8]}
          spacing="0"
          justify={["center", "center", "unset"]}
        >
          {famous.map((card: any) => {
            return (
              <CountrySingleInfo
                key={card.capital}
                capital={card.capital}
                bannerCard={card.banner}
                nameCard={card.name}
                flag={card.flag}
              />
            );
          })}
        </Stack>
      </Container>
    </>
  );
}
