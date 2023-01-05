import Directory from "./components/directory/directory.component";
import Categories from "./components/categories-data/categories";

const App = () => {

  return (
    <Directory categories={Categories} />
  )
}

export default App;
