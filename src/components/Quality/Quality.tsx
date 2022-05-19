import { Container, Stack } from "@chakra-ui/react";
import { Line } from "./Line";
import { QualityInfo } from "./QualityInfo";

export function Quality() {
  return (
    <Container maxW="container.xl" m={"0 auto"}>
      <Stack
        gap={[6, 8]}
        align="center"
        justify={["center", "space-between"]}
        mt={[20, 28]}
        direction="row"
        flexWrap={"wrap"}
      >
        <QualityInfo />
      </Stack>

      <Line />
    </Container>
  );
}
