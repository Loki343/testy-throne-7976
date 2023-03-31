import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getWoMenProducts } from '../../Redux/Products_Reducer/action';
import Loading from './Loading';
import { WomenProduct } from './WomenProduct';
import { useLocation, useSearchParams } from 'react-router-dom';

export const WomenProList = () => {
    const womenProd=useSelector((store)=>store.ProReducer.products);
    const dispatch=useDispatch();
    let load = useSelector((store)=>store.ProReducer);
    //console.log(load.isLoading);

    const [searchParams] = useSearchParams();
    const location=useLocation();

    let obj = {
      params: {
        category: searchParams.getAll("category"),
        color: searchParams.getAll("color"),
        size: searchParams.getAll("size"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
      },
    };

    useEffect(()=>{
     dispatch(getWoMenProducts(obj))
    },[location.search]);

  return (  load.isLoading ? <Loading /> : 
    <div style={{display:'grid' , gridTemplateColumns:"repeat(4, auto)" , gap:"5px" ,}}>
        {womenProd.length > 0 && womenProd.map((el)=>{
                return <WomenProduct key={el.id} {...el} />
            })
        }
    </div>
  )
};
