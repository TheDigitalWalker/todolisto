import styled from "styled-components";
import { Text } from "react-native";

export default styled(Text)`
  color: ${({ color }) => color || "black"};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
