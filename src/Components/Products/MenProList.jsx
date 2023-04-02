import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getMenProducts } from '../../Redux/Products_Reducer/action';
import Loading from './Loading';
import { SimpleGrid} from '@chakra-ui/react';

import { MenProduct } from './MenProduct';
import { useLocation, useSearchParams } from 'react-router-dom';

export const MenProList = () => {
    const menProd=useSelector((store)=>store.ProReducer.products);
    const dispatch=useDispatch();
    let load = useSelector((store)=>store.ProReducer);
    //console.log(load.isLoading);
    const [searchParams] = useSearchParams();
    const location=useLocation();
    const activePage=useSelector((store)=>store.ProReducer.activePage)
    const perPage = useSelector((store) => store.ProReducer.perPage);


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
    <SimpleGrid columns={{ sm: 1, md: 2, lg:4 }} gap={2}>
        {/* {menProd.length > 0 && menProd.map((el)=>{
                return <MenProduct key={el.id} {...el} />
             })
        } */}
        {menProd.length > 0 && menProd
        .filter((_, index) => {
          return (
            index >= perPage * (activePage - 1) &&
            index < perPage * activePage
          );
        })
        .map((el)=>{
          return <MenProduct key={el.id} {...el} />
        })}
    </SimpleGrid>
  )
};
