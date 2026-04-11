import Image from "./Image";

const ProductCard = ({ pdtBdg, pdtimgSrc, pdtTli, pdtCat, pdtPrc }) => {
  return (
    <div className="reltive p-3 rounded-1xl bg-[#fafafa]">
      <p className="absolute top-5 left-5 py-3 px-8 bg-secondary text-white text-[14px] font-bold">
        {pdtBdg}
      </p>
      <Image src={pdtimgSrc} />
      <div className="flex justify-between items-center pt-6 pb-4">
        <h3 className="font-bold text-[20px]">{pdtTli}</h3>
        <p className="text-primary">{`${pdtPrc}`}</p>
      </div>
      <p className="text-primary">{pdtCat}</p>
    </div>
  );
};

export default ProductCard;
