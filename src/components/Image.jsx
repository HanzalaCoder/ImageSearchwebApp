

function Image({data}) {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <div className="w-full">
          <img className="lg:h-[22rem] h-auto w-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform delay-100" src= {data.urls.small} alt={data.urls.description} />
        </div>
       
    </a>
    
  )
}

export default Image