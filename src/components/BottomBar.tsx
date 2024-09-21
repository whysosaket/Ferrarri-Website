import { IoChevronDown } from "react-icons/io5";

const BottomBar = () => {
  return (
    <div className="md:absolute bottom-2 right-10 bg-secondary text-white rounded-[3rem] px-3 py-3 flex justify-center align-middle gap-2 md:gap-4">
        <button className="flex text-xs md:text-base align-middle ml-2"><span className="my-auto mx-1">Model</span> <IoChevronDown className="my-auto" /></button>
        <button className="flex text-xs md:text-base align-middle"><span className="my-auto mx-1">Trim</span> <IoChevronDown className="my-auto" /></button>
        <button className="flex text-xs md:text-base align-middle"><span className="my-auto mx-1">Exterior Paint</span> <IoChevronDown className="my-auto" /></button>
        <button className="flex text-xs md:text-base align-middle"><span className="my-auto mx-1">Wheels</span> <IoChevronDown className="my-auto" /></button>
        <button className="flex text-xs md:text-base align-middle bg-[#FDFDFD] text-secondary rounded-[3rem] px-6 py-3">Find</button>
    </div>
  )
}

export default BottomBar