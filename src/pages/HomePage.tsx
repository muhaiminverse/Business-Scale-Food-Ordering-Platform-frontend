import landingImg from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
        });
    }

  return (
    <div className="flex flex-col gap-12">
        <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16" >
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Tuck into a takeway today
            </h1>
            <span className="text-xl ">Food is just a click away!</span>
            <SearchBar 
            placeHolder="Search by City" 
            onSubmit={handleSearchSubmit}
            />
        </div>
        <div className="grid md:grid-cols-2 gap-5 ">
            <img src={landingImg} />
            <div className="flex flex-col gap-4 items-center justify-center text-center">
            <span className="font-bold text-3xl tracking-tight text-black-400">
                Order takeway even faster!
            </span>
            <span>
                Download the MernEats App for faster ordering and a
                better experience.
            </span>
            <img src={appDownload} />
            </div>
        </div>
    </div>
  )
}

export default HomePage;