import Banner from "./components/homepage/Banner";
import HighPrice from "./components/homepage/HighPrice";
import LowPrice from "./components/homepage/LowPrice";
import AllProducts from "./components/homepage/AllProducts";

export default function Home() {
  return (
    <>
    <div className="w-7xl mx-auto">
    <Banner></Banner>
    <HighPrice></HighPrice>
    <LowPrice></LowPrice>
    <AllProducts></AllProducts>
    </div>
    </>
  );
}
