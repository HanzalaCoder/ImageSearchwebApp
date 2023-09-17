import { useState } from "react"

const Header = ({value,setValue,handleClick}) => {

   
  return (
        <section className="bg-gray-900">
                <div className="flex items-center justify-center py-10 md:py-16 max-w-2xl w-[90%] mx-auto"> 
                        <form className="flex items-center w-full bg-gray-50 rounded-xl  gap-4">
                            <label htmlFor="search">
                            <i className="fa-solid fa-magnifying-glass text-[#218ba6] text-2xl pl-4"></i>
                            </label>
                            <input type="search" 
                            className="w-full bg-gray-50 py-3 border-none outline-none text-sm md:text-xl pl-4 "
                            id="search"
                            placeholder="Search Any Image..."
                            onChange={(e)=> setValue(e.target.value.toLowerCase())}
                            value={value} />
                            <button type="submit" className=" bg-cyan-500 w-[130px] py-4 rounded-r-xl  uppercase"
                            onClick={handleClick}>
                                Search
                            </button>
                        </form>
                </div>
        </section>
  )
}

export default Header
