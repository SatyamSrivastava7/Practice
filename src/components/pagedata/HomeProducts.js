import Card from "../design/Card";
import classes from "./HomeProducts.module.css";

function HomeProducts(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.category}</address>
          <p>Price: ${props.price}</p>
          <p>{props.description}</p>
          <div className={classes.actions}>
            <button onClick={ShopHandler}>To Shop</button>
          </div>
        </div>
      </Card>
    </li>
  );

  function ShopHandler() {
    const AddedItem = {
      k: props.id,
    };
    const Items = [];
    Items.push(AddedItem);
    console.log(Items);
    console.log(AddedItem);
  }
}

export default HomeProducts;
