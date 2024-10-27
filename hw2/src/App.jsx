import Greeting from "./compentes/Greeting";
import ShoppingList from "./compentes/ShoppingList";
import OrderStatus from './compentes/OrderStatus';
function App() {
  const items = ["Молоко", "Хлеб", "Яблоки"];
  const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 456, status: 'доставлен' }
  ];
  return (
    <div className="App">
      <Greeting name="Рома" />
      <ShoppingList items={items} />
      {orders.map(order => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </div>
  );
}

export default App;
