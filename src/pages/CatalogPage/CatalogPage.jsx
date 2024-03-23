import { CardComponent } from "../../components/Cards";
import { CurrentLocation } from "../../components/CurrentLocation";
import { FilterComponent } from "../../components/Filters";

const CatalogPage = () => {
  return (
    <>
      <CurrentLocation />
      <FilterComponent />
      <CardComponent />
    </>
  );
};

export default CatalogPage;
