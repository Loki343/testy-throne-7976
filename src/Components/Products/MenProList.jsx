import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getMenProducts } from '../../Redux/Products_Reducer/action';
import Loading from './Loading';

import { MenProduct } from './MenProduct';
import { useLocation, useSearchParams } from 'react-router-dom';

export const MenProList = () => {
    const menProd=useSelector((store)=>store.ProReducer.products);
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
     dispatch(getMenProducts(obj))
    },[location.search]);

  return (  load.isLoading ? <Loading /> : 
    <div style={{display:'grid' , gridTemplateColumns:"repeat(4, auto)" , gap:"5px" ,}}>
        {menProd.length > 0 && menProd.map((el)=>{
                return <MenProduct key={el.id} {...el} />
            })
        }
    </div>
  )
};
