import { Routes, Route, useLocation } from "react-router-dom";
import TopSection from "./Components/Sections/TopSection";
import { FooterSection } from "./Components/Sections/FooterSection";
import HomePage from "./Pages/HomePage";
import DashboardPage from "./Pages/DashboardPage";
import GuitarPage from "./Pages/GuitarPage";
import HomePageTopRightElement from "./Components/Home/HomePageTopRightElement";
import TopTitleAndDescription from "./assets/TopTitleAndDescription";
import brandsData from "./assets/Data/brandsData";
import guitarsData from "./assets/Data/guitarsData";
import TopRightGuitarBrandImage from "./Components/GuitarsDashboardPage/TopLeftGuitarBrandImage.jsx";
import TopRightGuitarImage from "./Components/GuitarInfoPage/TopLeftGuitarImage.jsx";
import ScrollToTop from "./assets/ScrollToTop.jsx";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const pathSegments = currentPath.split("/");

  // Extract brandName from URL path
  const brandName = pathSegments[2];

  //Extract guitarId from URL path
  const guitarId = pathSegments[3];

  if (guitarId) {
    const guitar = guitarsData.find((g) => g.id === parseInt(guitarId));

    // Add null check for guitar
    if (!guitar) {
      console.warn(`Guitar with ID "${guitarId}" not found`);
      return null;
    }

    return (
      <TopSection
        topTitleAndDescription={
          <TopTitleAndDescription startTitle={guitar.name} marginBottom={31} />
        }
        topRightElement={<TopRightGuitarImage imageSrc={guitar.image} />}
      />
    );
  }

  if (brandName) {
    const brand = brandsData.find(
      (b) => b.name.toLowerCase() === brandName.toLowerCase()
    );

    if (!brand) {
      console.warn(`Brand with name "${brandName}" not found`);
      return null;
    }

    return (
      <TopSection
        topTitleAndDescription={
          <TopTitleAndDescription
            startTitle={brand.startTitle}
            highlight={brand.highlight}
            endTitle={brand.endTitle}
            description={brand.description}
            descriptionWidth="475px"
            marginBottom={31}
            padding={true}
          />
        }
        topRightElement={<TopRightGuitarBrandImage imageSrc={brand.src} />}
      />
    );
  }

  if (currentPath === "/") {
    return (
      <TopSection
        topTitleAndDescription={
          <TopTitleAndDescription
            startTitle="Browse top quality"
            highlight="Guitars"
            endTitle="online"
            description="Explore 50k+ latest collections of branded guitars online with VibeStrings."
            descriptionWidth="398px"
            marginBottom={20}
            padding={true}
          />
        }
        topRightElement={<HomePageTopRightElement />}
      />
    );
  }

  // Return null if no matching route
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brands/:brandName" element={<DashboardPage />} />
        <Route path="/brands/:brandName/:guitarId" element={<GuitarPage />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
