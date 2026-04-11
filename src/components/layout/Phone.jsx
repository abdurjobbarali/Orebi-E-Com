

import Container from '../common/Container';
import Flex from '../common/Flex'
import Image from '../common/Image'
import productAds from '/src/assets/productAds.png';

const Phone = () => {
  return (
    <div className='py-30'>
<Container>
    <Flex>
        <Image src={productAds} className={""}/>
    </Flex>
</Container>
    </div>
  )
}

export default Phone
