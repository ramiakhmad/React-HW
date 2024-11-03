import LangSwitcher from "./LangSwitcher";
import { LanguageProvider } from "./LanguageContext";
import Text from "./Text";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Text />
      <LangSwitcher />
    </LanguageProvider>
  );
}

export default App;
