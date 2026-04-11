import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import adsOne from "/src/assets/adsOne.png"
import addTwo from "/src/assets/addTwo.png"
import addThree from "/src/assets/addThree.jpg"

const Add = () => {
  return (
<div className="py-6">
  
    <Container>
        <Flex>

        <div className="w-[49%]">
                <Image src={adsOne} alt={"adsOne"} className={"w-full"}/>
        </div>
        <div className="w-[49%] ml-5">
<Image src={addTwo} alt={"addTwo"} className={"w-full"}/>
  <Image src={addThree} alt={"addThree"} className={"w-full mt-9 "} />

        </div>
         </Flex>
    </Container>

</div>
  )
}

export default Add