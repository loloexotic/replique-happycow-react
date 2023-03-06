// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Restaurants = () => {
//   const [data, setData] = useState();
//   const [isLoading, setIsLoading] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
//         );
//         console.log(response);
//         setData(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchData();
//   }, []);
//   return isLoading ? <p>Loading ...</p> : (

// {data.map(restaurant)=>{
//     return (
//         <article>
//             <h4>{restaurant.name}</h4>
//             <img src={restaurant.thumbnail} alt="restaurants" />
//             <p>{restaurant.description}</p>

//         </article>

//     )
//   }
//   )

//   }

// };

// export default Restaurants;
