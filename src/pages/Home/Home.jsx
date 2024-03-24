import { HomeWrapper, Button, Title, Text } from "./Home.styled";
import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";

const HomePage = () => {
  return (
    <HomeWrapper>
      <div>
        <Title>Caravan rental</Title>
        <Text>
          Discover new places every day and experience the freedom of traveling
        </Text>
        <Link to="/catalog">
          <Button>CATALOG</Button>
        </Link>
      </div>
    </HomeWrapper>
  );
};

export default HomePage;
