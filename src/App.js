import logo from './logo.svg';
import './App.css';
import ListItems from './contents/ListItems';

function App() {
  const products = [
    {
      imgSrc:"https://www.bulwark.com/dw/image/v2/BDCD_PRD/on/demandware.static/-/Sites-bulwark-master-catalog/default/dw81c40d8e/SEH4/PS_BW_SEH4CH_F.png?sw=800",
      name: "Sweatshirt",
      price: `49,99 $`,
    },
    {
      imgSrc:"https://5.imimg.com/data5/RG/TC/MY-26510561/guess-watch-for-men-500x500.jpg",
      name: "Watch",
      price: `333,64 $`,
    },
    {
      imgSrc:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/-1x-1.jpg",
      name: "SHOES",
      price: `196 $`,
    },
  ];
  return (
    <div style={{marginTop:'10mm'}}>
      <ListItems products={products}/>
    </div>
  );
}

export default App;
