import { FooterText, RootFooter } from "./style";

const FooterLeftBlock = () => {
  const currentYear = new Date().getFullYear();

  return (
    <RootFooter>
      <FooterText>
        © Edegvana
        <span> {currentYear}</span>
      </FooterText>
    </RootFooter>
  );
};

export { FooterLeftBlock };
