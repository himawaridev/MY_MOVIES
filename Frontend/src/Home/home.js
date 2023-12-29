import Banners from "../BANNERS/banners";
import Trending from "../TRENDING/trending";
import Trailers from "../TRAILERS/trailers";
import Popular from "../POPULAR/popular";
import Join from "../JOIN/join";
import ProgressCpn from "../PROGRESS/progress";

function Home() {
    return (
        <>
            <Banners />
            <Trending />
            <Trailers />
            <Popular />
            <Join />
            <ProgressCpn />
        </>
    );
}
export default Home;
