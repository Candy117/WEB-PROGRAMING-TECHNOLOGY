import './App.css';
import Navbar from './components/Navbar';
import ListPlant from './components/ListPlant'; 
import AddPlant from './components/AddPlant';
import React,{ useState } from 'react';
import Downer from './components/Downer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [productList , setProductList] = useState([
    {
      price:39999,
      name:'WEB DEVLOPMENT ',
      type:'Ondoor',
      quantity:0
    },
    {
      price:49999,
      name:'App Devlopment ',
      type:'Indoor',
      quantity:0
    },
    {
      price:999,
      name:'Full stack devlopment ',
      type:'Indoor',
      quantity:0
    }])
    let [totalAmount , setTotalAmount] = useState(0);
      
     const increaseQuantity=(index)=>{
      let newProductList = [...productList]
      let newTotalAmount = totalAmount;
      newProductList[index].quantity++
      newTotalAmount += newProductList[index].price 
      setTotalAmount(newTotalAmount)
      setProductList(newProductList);
  }

    const decreaseQuantity=(index)=>{
      let newProductList =[...productList]
      let newTotalAmount = totalAmount;
      if(newProductList[index].quantity > 0)
      { 
        newProductList[index].quantity-- ;
        newTotalAmount -= newProductList[index].price
      }
      
      setTotalAmount(newTotalAmount)
      setProductList(newProductList);
    }

     const resetAll=()=>{
      let newProductList =[...productList]
      newProductList.map((e)=>{e.quantity=0})
      setProductList(newProductList)
      setTotalAmount(0)
     }

     const removeItem = (index) =>{
      let newProductList =[...productList]
      let newTotalAmount = totalAmount;
      newTotalAmount -= newProductList[index].quantity*newProductList[index].price;
      newProductList.splice(index,1);
      setProductList(newProductList)
      setTotalAmount(newTotalAmount)
     } 

     const addPlant = (name,price) =>{
      let newProductList=[...productList]
      newProductList.push({
        price:price,
        name:name,
        quantity:0
      });
      setProductList(newProductList);
     }
  return (
   <>
   <Navbar/>
   <AddPlant addPlant={addPlant}/>
   <main className='container mt-5'>
              <ListPlant productList={productList} decreaseQuantity={decreaseQuantity}
               increaseQuantity={increaseQuantity} removeItem={removeItem} />
   </main>
   <Downer resetAll={resetAll} totalAmount={totalAmount}/>
   </>
  );
}

export default App;
