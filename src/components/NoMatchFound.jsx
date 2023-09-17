

const noMatchFound = ({items,name}) => {
    return [...Array(items).keys()].map((data,index)=> {
          return (
              <div key={index} className="animate-pulse w-full">
                  <div className="bg-gray-300 rounded-lg h-[16rem] text-center pt-28 text-2xl">
                    No Match Found for <br />
                   <span className="underline underline-offset-2">{name}</span> 
                    </div>
              </div>
          )
    })
  }
  
  export default noMatchFound