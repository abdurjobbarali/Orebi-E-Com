import Image from "./Image";
import { FaHeart } from "react-icons/fa";
import { TbGitCompare } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
const ProductCard = ({ pdtBdg, pdtimgSrc, pdtTli, pdtCat, pdtPrc }) => {
  return (
    <div className="reltive p-3 rounded-1xl bg-[#fafafa]  group">
      <p className="absolute top-5 left-5 py-3 px-8 bg-secondary text-white text-[14px] font-bold">
        {pdtBdg}
      </p>
      <Image src={pdtimgSrc} />
      <div className="flex justify-between items-center pt-[20px] text-black absolute">
        <h3 className="font-bold text-[40px] ">{pdtTli}</h3>
        <p className="text-primary">{`${pdtPrc}`}</p>
      </div>
      <p className="text-primary">{pdtCat}</p>
      <div className="bg-[#f5f5f5] p-3 absolute bottom-[40px] left-0 w-full hidden group-hover:block">
        <div className="flex justify-end items-center gap-x-3">
          <h3>Add to Wish List </h3>
        <FaHeart/>
        </div>
        <div className="flex justify-end items-center gap-x-3">
          <h3>Compare </h3>
        <TbGitCompare/>
        </div>
        <div className="flex justify-end items-center gap-x-3">
          <h3>Add to cart </h3>
        <FaShoppingCart/>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
