import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.scss";

function Banner() {
  let [category, setCategory] = useState();

  return (


<nav>
<ul class="menuItems">
            <li onClick={()=>setCategory("Cars")} >Cars</li>
            <li onClick={()=>setCategory("Cameras & Lenses")} >Cameras & Lenses</li>
            <li onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</li>
            <li onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</li>
            <li onClick={()=>setCategory("Motorcycles")} >Motorcycles</li>
            <li onClick={()=>setCategory("Tablets")} >Tablets</li>
</ul>
{ category!=null && <DynamicPosts category={category}/>  }
</nav>
  );
}

export default Banner;
