import React, { useState } from "react";
import Categories from "./Categories"
import Menu from "./Menu"
import data from "./data"

const allCategories = ["All",...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  
  const filterItems = (category)=>{
    if(category === "All"){
      setMenuItems(data)
    }
    else{
      const newItems = data.filter(
      (item) => item.category === category
      )
      setMenuItems(newItems)
    }
  }

  return(
    <div>
   <h2>Workshop2 : Food Menu</h2>
  <main>
    <section className="menu section">
      <div className="title">
<div className="underline"></div>
<h2>Our Menu</h2>
<div className="underline"></div>
</div>
<Categories allCategories={allCategories} filterItems={filterItems}/>
<Menu items={menuItems}/>
    </section>
  </main>
  </div>
  );
};

export default App;
