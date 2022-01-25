import { useContext } from 'react';

//import FeaturesContext from '../components/store/FeatureContext';
//import HomeData from '../components/pagedata/HomeData';
import Data from '../components/pagedata/HomeProducts';

function Shop(props) {
  const TotalShop = props.
  
  
  
  
  
    const favoritesCtx = useContext(FeaturesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no shopping yet. Start adding some?</p>;
  } else {
    content = <Data data={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Order Now</h1>
      {content}
    </section>
  );
}

// export default FeaturesPage;

// function Shop() {
//     return <div>Shop Page</div>
// }

export default Shop;