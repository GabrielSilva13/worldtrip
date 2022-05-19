import { Stack, Image, Text, useColorModeValue } from "@chakra-ui/react";

export function QualityInfo() {
  const color = useColorModeValue("#47585B", "#fff");
  return (
    <>
      <Stack direction={["row", "row", "column"]} fontFamily="Poppins">
        <Image
          src="/cocktail.svg"
          display={["none", "none", "block"]}
          maxW="85"
        />
        <Image src="/bolinha.svg" display={["block", "block", "none"]} />
        <Text
          as="span"
          fontWeight={600}
          fontSize={[18, 18, 24]}
          color={color}
          lineHeight={"36px"}
        >
          vida noturna
        </Text>
      </Stack>
      <Stack direction={["row", "row", "column"]} fontFamily="Poppins">
        <Image src="/surf.svg" display={["none", "none", "block"]} />
        <Image src="/bolinha.svg" display={["block", "block", "none"]} />
        <Text
          as="span"
          fontWeight={600}
          fontSize={[18, 18, 24]}
          color={color}
          lineHeight={"36px"}
        >
          praia
        </Text>
      </Stack>
      <Stack direction={["row", "row", "column"]} fontFamily="Poppins">
        <Image src="/building.svg" display={["none", "none", "block"]} />
        <Image src="/bolinha.svg" display={["block", "block", "none"]} />
        <Text
          as="span"
          fontWeight={600}
          fontSize={[18, 18, 24]}
          color={color}
          lineHeight={"36px"}
        >
          moderno
        </Text>
      </Stack>
      <Stack direction={["row", "row", "column"]} fontFamily="Poppins">
        <Image src="/museum.svg" display={["none", "none", "block"]} />
        <Image src="/bolinha.svg" display={["block", "block", "none"]} />
        <Text
          as="span"
          fontWeight={600}
          fontSize={[18, 18, 24]}
          color={color}
          lineHeight={"36px"}
        >
          clássico
        </Text>
      </Stack>
      <Stack direction={["row", "row", "column"]} fontFamily="Poppins">
        <Image src="/earth.svg" display={["none", "none", "block"]} />
        <Image src="/bolinha.svg" display={["block", "block", "none"]} />
        <Text
          as="span"
          fontWeight={600}
          fontSize={[18, 18, 24]}
          color={color}
          lineHeight={"36px"}
        >
          e mais...
        </Text>
      </Stack>
    </>
  );
}
