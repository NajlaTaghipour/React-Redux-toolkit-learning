import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../features/milk/milkSlice";

function MilkContainer() {
  const milk = useSelector((state) => state.milk);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Milk Number : {milk.numOfMilks}</h2>
      <button onClick={() => dispatch(buyMilk(1))}>Buy Milk</button>
    </div>
  );
}
export default MilkContainer;
