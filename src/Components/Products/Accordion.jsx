import { Accordion ,AccordionItem,AccordionButton,
  Box,AccordionIcon, AccordionPanel ,Text
} from "@chakra-ui/react"
// import { MinusIcon,AddIcon } from '@chakra-ui/icons';
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Accordionfun = () => {
  const [searchParams , setSearchParams]=useSearchParams();
  const initialOrder=searchParams.get("order");
  const [order , setOrder]=useState(initialOrder || "")
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);
  const initialColors=searchParams.getAll("color")
  const [color, setColor] = useState(initialColors || []);
  const initialSizes=searchParams.getAll("size")
  const [size, setSize] = useState(initialSizes || []);
  
  const handleChangeCategory = (e) => {
    //console.log(e.target.value);
    let newCategory = [...category];
    const value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
    //console.log(category);
    //console.log(searchParams);
    //console.log(searchParams.getAll("category"));
  };

  const handleChangeColors = (e) => {
    let newColors = [...color];
    const value = e.target.value;

    if (newColors.includes(value)) {
      newColors = newColors.filter((el) => el !== value);
    } else {
      newColors.push(value);
    }
    setColor(newColors);
    //console.log(color);
  };

  const handleChangeSizes = (e) => {
    let newSizes = [...size];
    const value = e.target.value;

    if (newSizes.includes(value)) {
      newSizes = newSizes.filter((el) => el !== value);
    } else {
      newSizes.push(value);
    }
    setSize(newSizes);
    //console.log(size);
  };

  const handleSort = (e) => {
    //console.log("yes");
    //console.log(e.target.value);
    setOrder(e.target.value)
  };


  useEffect(()=>{
    let params = {
      category, //category:category
      color,
      size,
    };

    order && (params.order=order);

    setSearchParams(params);
  },[category,order,color,size]);

  return ( 
  <Box>

<Accordion allowMultiple>
<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
       <Text fontSize={"18px"} p={"6px 0"}>Sort By</Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
    <div onChange={handleSort}>
      <Box >
      <input type="checkbox" 
          value={"asc"}
          name="order"
          checked={order==="asc"} 
           />&nbsp;
      <label >Low To High Price</label>
      </Box>
      <Box>
      <input type="checkbox" 
          value={"desc"}
          name="order"
          checked={order==="desc"} 
          />&nbsp;
      <label>High To Low Price</label>
      </Box>
      </div>
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
       <Text fontSize={"18px"} p={"6px 0"}>Colors</Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
      <Box >
      <input type="checkbox" 
      value={"Black"}
      onChange={handleChangeColors}
      checked={color.includes("Black")} 
      />&nbsp;
      <label>Black</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"White"}
      onChange={handleChangeColors}
      checked={color.includes("White")} 
      />&nbsp;      
      <label>White</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Brown"}
      onChange={handleChangeColors}
      checked={color.includes("Brown")} 
      />&nbsp;      
      <label>Brown</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Charcoal"}
      onChange={handleChangeColors}
      checked={color.includes("Charcoal")} 
      />&nbsp;      
      <label>Charcoal</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Blue"}
      onChange={handleChangeColors}
      checked={color.includes("Blue")} 
      />&nbsp;      
      <label>Blue</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Archive Beige"}
      onChange={handleChangeColors}
      checked={color.includes("Archive Beige")} 
      />&nbsp;       
      <label>Archive Beige</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Red"}
      onChange={handleChangeColors}
      checked={color.includes("Red")} 
      />&nbsp;      
      <label>Red</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Camel"}
      onChange={handleChangeColors}
      checked={color.includes("Camel")} 
      />&nbsp;     
      <label>Camel</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Marigold"}
      onChange={handleChangeColors}
      checked={color.includes("Marigold")} 
      />&nbsp;      
      <label>Marigold</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Orange"}
      onChange={handleChangeColors}
      checked={color.includes("Orange")} 
      />&nbsp;       
      <label>Orange</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Honey"}
      onChange={handleChangeColors}
      checked={color.includes("Honey")} 
      />&nbsp;     
      <label>Honey</label>
      </Box>
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
       <Text fontSize={"18px"} p={"6px 0"}>Sizes</Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
      <Box >
      <input type="checkbox"  
      value={"S"}
      onChange={handleChangeSizes}
      checked={size.includes("S")} 
      />&nbsp;
      <label>S</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"M"}
      onChange={handleChangeSizes}
      checked={size.includes("M")} 
      />&nbsp;      
      <label>M</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"L"}
      onChange={handleChangeSizes}
      checked={size.includes("L")} 
      />&nbsp;      
      <label>L</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"XL"}
      onChange={handleChangeSizes}
      checked={size.includes("XL")} 
      />&nbsp;    
      <label>XL</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"XXL"}
      onChange={handleChangeSizes}
      checked={size.includes("XXL")} 
      />&nbsp;      
      <label>XXL</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"35"}
      onChange={handleChangeSizes}
      checked={size.includes("35")} 
      />&nbsp;      
      <label>34</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"36"}
      onChange={handleChangeSizes}
      checked={size.includes("36")} 
      />&nbsp;      
      <label>36</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"37"}
      onChange={handleChangeSizes}
      checked={size.includes("37")} 
      />&nbsp;      
      <label>37</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"38"}
      onChange={handleChangeSizes}
      checked={size.includes("38")} 
      />&nbsp;     
      <label>38</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"39"}
      onChange={handleChangeSizes}
      checked={size.includes("39")} 
      />&nbsp;      
      <label>39</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"40"}
      onChange={handleChangeSizes}
      checked={size.includes("40")} 
      />&nbsp;      
      <label>40</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"41"}
      onChange={handleChangeSizes}
      checked={size.includes("41")} 
      />&nbsp;      
      <label>41</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"42"}
      onChange={handleChangeSizes}
      checked={size.includes("42")} 
      />&nbsp;      
      <label>42</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"75"}
      onChange={handleChangeSizes}
      checked={size.includes("75")} 
      />&nbsp;      
      <label>75</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"80"}
      onChange={handleChangeSizes}
      checked={size.includes("80")} 
      />&nbsp;      
      <label>80</label>
      </Box>
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
       <Text fontSize={"18px"} p={"6px 0"}>Categorys</Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
      <Box >
      <input type="checkbox" 
      value={"Jacket"}
      onChange={handleChangeCategory}
      checked={category.includes("Jacket")}
       />&nbsp;
      <label>Jacket</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Coat"}
      onChange={handleChangeCategory}
      checked={category.includes("Coat")}
      />&nbsp;      
      <label>Coat</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Sneakers"}
      onChange={handleChangeCategory}
      checked={category.includes("Sneakers")}
      />&nbsp;      
      <label>Sneakers</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Formal"}
      onChange={handleChangeCategory}
      checked={category.includes("Formal")}
      />&nbsp;      
      <label>Formal</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Boots"}
      onChange={handleChangeCategory}
      checked={category.includes("Boots")}
      />&nbsp;      
      <label>Boots</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Bag"}
      onChange={handleChangeCategory}
      checked={category.includes("Bag")}
      />&nbsp;       
      <label>Bag</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Clothing"}
      onChange={handleChangeCategory}
      checked={category.includes("Clothing")}
      />&nbsp;     
      <label>Clothing</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Belt"}
      onChange={handleChangeCategory}
      checked={category.includes("Belt")}
      />&nbsp;      
      <label>Belt</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Wallet"}
      onChange={handleChangeCategory}
      checked={category.includes("Wallet")}
      />&nbsp;      
      <label>Wallet</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Scarf"}
      onChange={handleChangeCategory}
      checked={category.includes("Scarf")}
      />&nbsp;      
      <label>Scarf</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Cap"}
      onChange={handleChangeCategory}
      checked={category.includes("Cap")}
      />&nbsp;      
      <label>Cap</label>
      </Box>
      <Box>
      <input type="checkbox" 
      value={"Accessories"}
      onChange={handleChangeCategory}
      checked={category.includes("Accessories")}
      />&nbsp;      
      <label>Accessories</label>
      </Box>
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
       <Text fontSize={"18px"} p={"6px 0"}>Price</Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
      <Box >
      <input type="checkbox"  
      //  value={"Jacket"}
      //  onChange={handleChange}
      //  checked={category.includes("Jacket")}
      />&nbsp;
      <label >100 To 500</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>500 To 1000</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>1000 To 1500</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>1500 To 2000</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>2000 To 2500</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>2500 To 3000</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>3000 To 3500</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>3500 To 4000</label>
      </Box>
  </AccordionPanel>
</AccordionItem>

<AccordionItem>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
       <Text fontSize={"18px"} p={"6px 0"}>Discounts</Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
      <Box >
      <input type="checkbox"  />&nbsp;
      <label >1% To 10%</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>10% To 20%</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>20% To 30%</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>30% To 40%</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>40% To 50%</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>50% To 60%</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>60% To 70%</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>70% To 80%</label>
      </Box>
      <Box>
      <input type="checkbox" />&nbsp;      
      <label>80% To 90%</label>
      </Box>
  </AccordionPanel>
</AccordionItem>
{/* <AccordionItem>
  {({ isExpanded }) => (
    <>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            Section 2 title
          </Box>
          {isExpanded ? (
            <MinusIcon fontSize='12px' />
          ) : (
            <AddIcon fontSize='12px' />
          )}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </AccordionPanel>
    </>
  )}
</AccordionItem> */}
</Accordion>
</Box>
  )
};

export default Accordionfun;