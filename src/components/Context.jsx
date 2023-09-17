import Header from "./Header"
import ImagesGrid from "./ImagesGrid"
import { useState,useEffect,useContext, createContext } from "react"

export const  ContextData = createContext()

const Context = () => {
   const [querry,setQuerry] = useState("")
   const [name,SetName] = useState("country")
   const [imgData, setImgData] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [noMatch, setNoMatch] = useState(true)
   const [pagenum, setPageNum] = useState(1)
   const [seeMore,setSeeMore] = useState(16)


   useEffect(() => {
      const FetchData = async () => {
        try {
          setNoMatch(true)
          setIsLoading(true)
          const request =  await fetch(`https://api.unsplash.com/search/photos?query=${name}&page=${pagenum}&per_page=${seeMore}&client_id=ti8XnWJuIQIEQf-LurDGjU0Gp554xn0OQc8T5OOmspM`)
          if (!request.ok) throw Error("Bad Request 200")
          const data = await request.json()
          setImgData(data.results)
          if (data.results.length < 1) {
            setNoMatch(false)
          } 
        } catch(err) {
            console.log("erre", err)
        } finally {
          setIsLoading(false)
        }
      }
      FetchData()
   },[name,pagenum,seeMore])

   function SearchImage(e) {
    e.preventDefault()
    SetName(querry)
    setQuerry("")
    setPageNum(1)
    setSeeMore(16)
  }
  return (
        <ContextData.Provider value={[imgData,isLoading,noMatch,name,seeMore]} >
            <Header value= {querry} setValue = {setQuerry} handleClick = {SearchImage} />
            <ImagesGrid handleClick = {setPageNum} handeleSeeMore = {setSeeMore} />
        </ContextData.Provider>
  )
}
export default Context