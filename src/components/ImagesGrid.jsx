import { useContext } from "react"
import {ContextData} from "./Context"
import Skeleton from "./Skeleton"
import NoMatchFound from "./NoMatchFound"
import Image from "./Image"

const ImagesGrid = ({handleClick,handeleSeeMore}) => {
    const [imgData, isLoading,noMatch,name,seeMore] = useContext(ContextData)


    function SeeMore() {
        handeleSeeMore(prev => {
            let count = 0
            if (prev > 16) {
                return  count = 16
            } else if (prev < 17) {
                return prev = prev + 12
            }
        })
    }

  return (
    <div>
         <section className="grid md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-4  mt-10  mx-auto w-[90%]">
            {isLoading ? <Skeleton items = {16} /> : noMatch ? 
            (imgData.map((data,key) => {
                return <Image key = {data.id}  data = {data} />
            })) : <NoMatchFound items={4} name = {name} />} 
        </section>
        <div className="flex justify-center items-center text-5xl my-8 flex-col gap-5">
            <button onClick={SeeMore} className="uppercase border-2 border-cyan-400 text-xl px-4 py-2">
                {seeMore > 16 ? "show Less" : "show more"  }
            </button>
            <div className="flex flex-row gap-8">
                <button onClick={()=> {
                    console.log("prev page")
                    handleClick(prev => {
                        let count = 0
                        if (prev <= 1) {
                            return count = 1 
                        } else {
                            return count = prev - 1
                        }
                    })

                }} ><i className="fa-solid fa-arrow-left"></i></button>

                <button onClick={()=> {
                    console.log("next page")
                    handleClick(prev => prev + 1)

                }} ><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
       
  )
}

export default ImagesGrid