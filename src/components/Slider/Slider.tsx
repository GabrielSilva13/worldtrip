import { SliderTitle } from "./SliderTitle";

import { Container } from "@chakra-ui/react";
import { SliderItem } from "./SliderItem";
export function Slider() {
  return (
    <Container maxWidth={"container.xl"} m="0 auto">
      <SliderTitle />
      <SliderItem />
    </Container>
  );
}
