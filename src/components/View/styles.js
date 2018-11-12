import styled from "styled-components";
import { View } from "react-native";

export default styled(View)`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
`;
