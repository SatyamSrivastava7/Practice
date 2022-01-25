import HomeProducts from './HomeProducts';
import classes from './HomeProducts.module.css';

function HomeData(props) {
  return (
    <ul className={classes.list}>
      {props.menuItems.map((menuItem) => (
        <HomeProducts
          key={menuItem.id}
          id={menuItem.id}
          image={menuItem.image}
          title={menuItem.title}
          price={menuItem.price}
          category={menuItem.category}
          description={menuItem.description}
        />
      ))}
    </ul>
  );
}

export default HomeData;