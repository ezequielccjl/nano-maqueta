import { Text } from "react-native";
import Navigation from "./Navigation";
import Authentication from "./src/components/auth/authentication";

export default function App() {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return <Navigation />;
}
