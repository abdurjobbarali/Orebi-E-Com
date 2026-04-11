
import Container from '../common/Container'
import Flex from '../common/Flex'
import logo from "/src/assets/Logo.svg"
import Image from '../common/Image'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaCaretDown,FaBars,FaUser,FaShoppingCart  } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className="bg-[#ffff] py-8">
 <Container>
<Flex className={"justify-between"}>
  <div className="w-[40%]">
    <Image src={logo} alt={logo}/>
  </div>
  <div className="w-[60%]">
<ul className='flex items-center gap-x-5'>
  <li className='text-[14px]  text-primary font-display font-normal hover:text-secondary'>
    <Link to={"/"}>Home</Link>
  </li>
  <li className='text-[14px]  text-primary font-display font-normal hover:text-secondary'>
    <Link to={"about"}>About</Link>
  </li>
  <li className='text-[14px]  text-primary font-display font-normal hover:text-secondary'>
    <Link to={"shop"}>Shop</Link>
  </li>
  <li className='text-[14px]  text-primary font-display font-normal hover:text-secondary'>
    <Link to={"contact"}>Contact</Link>
  </li>
</ul>
  </div>

</Flex>
 </Container>
    </div>
    <div className=" bg-[#f5f5f3] py-8 border-2 border-[#979797]">
      <Container>
        <Flex className={"justify-between"}>
          <div className=" flex items-center gap-x-5">
            <FaBars />
            Shop by Category
          </div>
          <div className="relative">
        <input className='w-120 py-2 px-3 bg-white rounded-md focus:outline-none' placeholder='Search by Category'/>
        <CiSearch className='absolute top-3 right-3 text-2xl'/>
          </div>
          <div className="flex items-center gap-x-4">
           <div className="flex items-center">
          
             <FaUser />
            <FaCaretDown />
           </div>
           <FaShoppingCart/>
          </div>
        </Flex>
      </Container>
    </div>
          
    </>
  )
}

export default Header