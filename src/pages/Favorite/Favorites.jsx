import { useSelector } from "react-redux";
import { selectFavoritesCampers } from "../../redux/favorites/selectors";
import { selectVisibleCampers } from "../../redux/filter/selectors";
import { CampersList } from "../../components/CatalogList/CampersList";
import { Container } from "../../styles/GlobalStyles";
import { selectIsLoading } from "../../redux/catalog/selectors";
import { Loader } from "../../components/Loader/Loader";
import camper from "../../assets/image/1.jpg";
import { Pictire, Title } from "./Favorites.styled";

const Favorites = () => {
  const likedCampers = useSelector(selectFavoritesCampers);
  const campersByFilter = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);

  const favoriteCampers = campersByFilter.filter((camp) =>
    likedCampers.includes(camp._id)
  );

  return (
    <Container>
      {favoriteCampers.length === 0 && (
        <>
          <Title>
            Your favorites list is currently empty. In the catalog you can add
            the products you like to your favorites and you will be able to see
            them on this page.
          </Title>
          <Pictire src={camper} alt="camper" />
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <CampersList campers={favoriteCampers} pathForModal="favorites" />
      )}
    </Container>
  );
};

export default Favorites;
