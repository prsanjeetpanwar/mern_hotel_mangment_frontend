import React from 'react'
import './Features.css'
import useFetch from '../../hooks/UseFatch'

const Features = () => {
   const {data,loading,error}= useFetch("/hotels/find/countByCity?cities=Mumbai,Hyderabad,Varanasi")
 
  return (
    <div className='Featured'>

{ loading?(
   <div>Loading please wait</div>
):(
   <>

   <div className="featuredItem">
       <img src="https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?s=612x612&w=0&k=20&c=xT9TK7oYkP6TP62lHqP0H-9mfz9cWva4OcYEnt06cjc=" alt=""
       className='featuredImg'
       />
       <div className="featuredTitles">
   
        <h1>Mumbai</h1>
        <h2>{data[0]} properties</h2>
       </div>
    </div>
    <div className="featuredItem">
       <img src="https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=" alt=""
       className='featuredImg'
       />
       <div className="featuredTitles">
   
        <h1>Headrabad</h1>
        <h2>{data[1]} properties</h2>
       </div>
    </div>
    <div className="featuredItem">
       <img src="https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?s=612x612&w=0&k=20&c=LbpIHRo7kGT7dbUr6b6UuD1d6P0yCaKZ2lbqo3TY988=" alt=""
       className='featuredImg'
       />
       <div className="featuredTitles">
   
        <h1>Varanasi</h1>
        <h2>{data[2]} properties</h2>
       </div>
    </div>
    </>
)
}
    </div>
  )
}

export default Features
