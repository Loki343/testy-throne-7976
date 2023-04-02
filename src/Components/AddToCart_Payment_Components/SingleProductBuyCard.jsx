
// import React from 'react'
// import SinProductImg from './SinProductImg'
// import AddToCart from './Tinycomponents/AddToCart'

// import FormatPrice from './Tinycomponents/FormatPrice'
// import PageNavigation from './Tinycomponents/PageNavigation'
// import StarsAndReview from './Tinycomponents/StarsAndReview'







// const SingleProductBuyCard = ({product}) => {





//   return (
//     <div>
//       <PageNavigation title={product.name} />
//       <div className="single-product flex-card">
//         {/* product image */}
//         <SinProductImg image={product.image} />


        
//         {/* product Data */}

//         <div className="single-product-data">
//           <h2 className="single-product-name">{product.name}</h2>
//           <h2 className="single-product-company">{product.company}</h2>
//           <p className="single-product-price">MRP:
//             <del>
//               <FormatPrice price={+product.price + 250000} />
//             </del>
//             </p>
//           <p className="single-product-price real-price">Deal of the Day : <FormatPrice price={product.price } /></p>
//           <h2 className="single-product-description">{product.description}</h2>
//           <h2 className="single-product-info">{product.stock > 0 ? "inStock" : "Not Available"}</h2>
//           <h2 className="single-product-category">{product.category}</h2>
//           <h2 className="single-product-stock">{product.stock}</h2>
//           <h2 className="single-product-stars-reviews"> <StarsAndReview stars={product.stars} review={product.reviews} /></h2>

//           {product.stock > 0 && <AddToCart product={product} />}




//         </div>


//       </div>

//     </div>
//   )
// }

// export default SingleProductBuyCard