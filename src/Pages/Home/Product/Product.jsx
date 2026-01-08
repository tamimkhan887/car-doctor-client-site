import { MdOutlineStar } from "react-icons/md";
const Product = ({ product }) => {
    const {
        title,
        img,
        price
    } = product
    return (
        <div className="p-6 shadow rounded-lg">
            <div className="bg-[#E8E8E8] py-6 flex items-center justify-center rounded-xl">
                <img src={img} alt="" className=" w-48 h-48 " />
            </div>
            <div className="space-y-2 mt-3">
                <div className="flex justify-center items-center">
                    <MdOutlineStar size={24} fill="#FF912C"></MdOutlineStar>
                    <MdOutlineStar size={24} fill="#FF912C"></MdOutlineStar>
                    <MdOutlineStar size={24} fill="#FF912C"></MdOutlineStar>
                    <MdOutlineStar size={24} fill="#FF912C"></MdOutlineStar>
                    <MdOutlineStar size={24} fill="#FF912C"></MdOutlineStar>
                </div>
                <p className="text-[#444444] font-bold text-2xl text-center">{title}</p>
                <p className="text-[#FF3811] font-semibold text-xl text-center">{price}</p>
            </div>
        </div>
    );
};

export default Product; 