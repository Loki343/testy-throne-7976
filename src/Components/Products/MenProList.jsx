import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getMenProducts } from '../../Redux/Products_Reducer/action';
import Loading from './Loading';

import { MenProduct } from './MenProduct';

export const MenProList = () => {
    const menProd=useSelector((store)=>store.MenProReducer.products);
    //console.log(menProd);
    const dispatch=useDispatch();

    let load = useSelector((store)=>store.MenProReducer);
    console.log(load.isLoading);

    useEffect(()=>{
     dispatch(getMenProducts())
    },[menProd.length]);

  return (  load.isLoading ? <Loading /> : 
    <div style={{display:'grid' , gridTemplateColumns:"repeat(4, auto)" , gap:"5px" ,}}>
        {menProd.length > 0 && menProd.map((el)=>{
                return <MenProduct key={el.id} {...el} />
            })
        }
    </div>
  )
};
