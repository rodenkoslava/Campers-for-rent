import { Container } from "../../styles/GlobalStyles";
import {
  HeaderField,
  List,
  StyledLink,
  SvgIconCampers,
} from "./Navigation.styled";

export const Navigation = () => {
  return (
    <HeaderField>
      <Container>
        <nav>
          <List>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/catalog">Catalog</StyledLink>
            </li>
            <li>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </li>
          </List>
        </nav>
      </Container>
    </HeaderField>
  );
};
