import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
    const [categories,SetCategory] = useState([]);

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>SetCategory(data.data.news_category))
    },[])

    return (
        <div>
            <h2 className='font-semibold'>All Catagory</h2>
            <div className="flex flex-col gap-2 mt-3">
                {
                    categories.map(category=><NavLink to={`/category/${category.category_id}`} className=" text-black bg-[#E7E7E7] py-4 rounded btn btn-ghost" key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
            
        </div>
    );
};

export default LeftNavBar;