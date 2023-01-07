import Directory from "../../components/directory/directory.component";
import Categories from "../../components/categories-data/categories";

const Home = () => {

    return (
        <>
            <Directory categories={Categories} />
        </>
    )
}

export default Home;
