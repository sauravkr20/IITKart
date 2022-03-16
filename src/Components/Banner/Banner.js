import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.scss";

function Banner() {
  let [category, setCategory] = useState();

  return (


<nav>
<ul class="menuItems">
            <li onClick={()=>setCategory("Mobiles and laptops")} >Mobiles and laptops</li>
            <li onClick={()=>setCategory("Cycles")} >Cycles</li>
            <li onClick={()=>setCategory("Books")} >Books</li>
            <li onClick={()=>setCategory("Shoes")} >Shoes</li>
            <li onClick={()=>setCategory("Jobs")} >Jobs</li>
</ul>
{ category!=null && <DynamicPosts category={category}/>  }
</nav>
  );
}

export default Banner;
