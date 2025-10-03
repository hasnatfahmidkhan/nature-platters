import Container from "../../Components/Container/Container";
import NewArriavalCard from "../../Components/NewArriavalCard/NewArriavalCard";
import PageTitle from "../../Components/PageTitle/PageTitle";
import heroBg from "../../assets/hero-img.png";
import dawatLogo from "../../assets/dawat-logo.png";
import indiagateLogo from "../../assets/indiagate-logo.png";
import productDawat from "../../assets/product-dawat.png";
import productIndiagate from "../../assets/product-indiagate.png";
const Home = () => {
  return (
    <div>
      <>
        <PageTitle title="Home Page" />
        {/* Hero Section  */}
        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#EFEBE3] flex flex-col justify-center items-center pt-10 md:pt-16 xl:pt-32 gap-10">
          <div className="space-y-7.5">
            <h1 className="text-2xl md:text-6xl font-semibold text-center md:leading-[70px] text-black ">
              Freshness{" "}
              <span className="text-green-600">
                You Can <br /> Count
              </span>{" "}
              On, Prices You’ll Love!
            </h1>
            <p className="md:text-xl text-center px-2 text-black">
              Shop your daily essentials at unbeatable prices. From fresh
              produce to pantry <br className="hidden md:inline" /> staples,
              we’ve got you covered every day!
            </p>
          </div>
          <div>
            <img className="" src={heroBg} alt="" />
          </div>
        </section>

        {/* New Arriaval & Offers Section */}
        <Container>
          <section>
            <h2 className="text-[#179800] text-4xl font-semibold">
              Arrival & Offers
            </h2>
            <div className="grid md:grid-cols-2 gap-y-5 md:gap-y-0 gap-x-0 md:gap-x-8 py-7">
              <div>
                <NewArriavalCard
                  brandLogoSrc={dawatLogo}
                  discounText={"UP to 20% OFF"}
                  buttonConfig={{
                    style:
                      "bg-[#63B76D] border-none shadow-none text-white text-xl py-7 px-9",
                    text: "Cook Exotic Dishes",
                  }}
                  productImgScr={productDawat}
                />
              </div>
              <div>
                <NewArriavalCard
                  brandLogoSrc={indiagateLogo}
                  discounText={"UP to 40% OFF"}
                  backgroundColor="#102861"
                  buttonConfig={{
                    style:
                      "bg-[#2A4D97] border-none shadow-none text-white text-xl py-7 px-9",
                    text: "World’s No.1 Rice",
                  }}
                  productImgScr={productIndiagate}
                />
              </div>
            </div>
          </section>
        </Container>
      </>
    </div>
  );
};

export default Home;
