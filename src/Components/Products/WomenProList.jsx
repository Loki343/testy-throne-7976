import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getWoMenProducts } from '../../Redux/Products_Reducer/action';
import Loading from './Loading';
import { WomenProduct } from './WomenProduct';

export const WomenProList = () => {
    const menProd=useSelector((store)=>store.ProReducer.products);
    //console.log(menProd);
    const dispatch=useDispatch();

    let load = useSelector((store)=>store.ProReducer);
    //console.log(load.isLoading);

    useEffect(()=>{
     dispatch(getWoMenProducts())
    },[menProd.length]);

  return (  load.isLoading ? <Loading /> : 
    <div style={{display:'grid' , gridTemplateColumns:"repeat(4, auto)" , gap:"5px" ,}}>
        {menProd.length > 0 && menProd.map((el)=>{
                return <WomenProduct key={el.id} {...el} />
            })
        }
    </div>
  )
};
