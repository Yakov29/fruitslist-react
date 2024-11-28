import "./App.css";
import { Title } from "./components/Title/Title";
import { List } from "./components/List/List";

const fruits = [
  {
    name: "apple",
    photo:
      "https://th.bing.com/th/id/OIP.gxVIhxEKV2L4dkBjwptXjwHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain",
    price: 15,
  },
  {
    name: "orange",
    photo:
      "https://th.bing.com/th/id/OIP.07Oyb9un-38JIVCzqibMHgHaFS?w=1920&h=1371&rs=1&pid=ImgDetMain",
    price: 17,
  },
  {
    name: "banana",
    photo:
      "https://th.bing.com/th/id/OIP.DzzBtp9wRuY1VocmOurZ7gHaJE?w=1903&h=2331&rs=1&pid=ImgDetMain",
    price: 10,
  },
  {
    name:"Kivi",
    photo: "https://www.lovemysalad.com/sites/default/files/15433078_xxl1.jpg",
    price: "100"
  }
];

function App() {
  return (
    <div className="App">
      <Title />
      <List fruitsData={fruits}/>
    </div>
  );
}

export default App;
