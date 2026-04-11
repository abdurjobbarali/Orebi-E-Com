import React from 'react'
import Container from"/src/components/common/Container";
import { RiNumber2 } from "react-icons/ri";
import Flex from '../common/Flex';
import { TbTruckDelivery } from "react-icons/tb";
import { IoReloadSharp } from "react-icons/io5";
const Policy = () => {
  return (
<div className="py-4 border border-b-2 border-[#f0f0f0]">
<Container>
<Flex className={"justify-between"} >
   
 <div className="flex items-center gap-x-2">
    <RiNumber2 /><p> Two years warranty</p>
</div>
 <div className="flex items-center gap-x-2">
    <TbTruckDelivery/><p>Free shipping </p>
</div>
 <div className="flex items-center gap-x-2"> 
    <IoReloadSharp />
<p>Return policy in 30 days</p>
</div>
</Flex>
</Container>

</div>
  )
}

export default Policy