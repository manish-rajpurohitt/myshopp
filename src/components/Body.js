import Categories from "./Categories";
import React from "react";
import Products from "./Products";

export default function Body() {
  const productsList = [
    {
        productName:"Product1",
        category:"category1",
        image:"https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612",
        price:25000,
        discount:5,
    },{
        productName:"Product2",
        category:"category1",
        image:"https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612",
        price:50000,
        discount:5,
    },{
        productName:"Product3",
        category:"category1",
        image:"https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612",
        price:23000,
        discount:15,
    },{
        productName:"Product4",
        category:"category2",
        image:"https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612",
        price:1000,
        discount:30,
    },{
        productName:"Product5",
        category:"category2",
        image:"https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612",
        price:5000,
        discount:50,
    },{
        productName:"Product6",
        category:"category2",
        image:"https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612",
        price:25000,
        discount:5,
    },{
        productName:"Product7",
        category:"category3",
        image:"https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612",
        price:25000,
        discount:5,
    },{
        productName:"Product8",
        category:"category3",
        image:"https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612",
        price:25000,
        discount:5,
    },{
        productName:"Product9",
        category:"category4",
        image:"https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612",
        price:25000,
        discount:5,
    },{
        productName:"Product10",
        category:"category4",
        image:"https://images.pexels.com/photos/6140203/pexels-photo-6140203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        price:25000,
        discount:5,
    }
  ];
  const categoriesList = ["category1", "category2", "category3", "category4"]
  const [category,updateCategory] = React.useState("");
  const changeCategory = (cat)=>{
    updateCategory(cat.innerText);
  }
  return (
    <div class="body">
      <Categories categories={categoriesList} changeCategory={changeCategory} />
      <Products category={category} products={productsList}/>
    </div>
  );
}
