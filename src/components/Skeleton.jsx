

const Skeleton = ({items}) => {
  return [...Array(items).keys()].map((data,index)=> {
        return (
            <div key={index} className="animate-pulse">
                <div className="bg-gray-300 rounded-lg h-72"></div>

            </div>
        )
  })
    
  
}

export default Skeleton