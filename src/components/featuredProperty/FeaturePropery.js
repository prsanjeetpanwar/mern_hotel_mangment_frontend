import React from 'react'
import './FeatureProperty.css'

const FeaturePropery = () => {
  return (
    <div className='fp'>
        <div className='fpTItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt=""
             className='fpimg'
            />
            <span className='fpName'>Taj Hotel</span>
            <span className='fpcity'>Mumbai</span>
            <span className='fpPrice'>Starting from $160</span>
            <div className='fpRating'>
                <button>8.9</button>
                <span>Excellent</span>

            </div>
        </div>
      <div className='fpTItem'>
    <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="Taj Hotel"
     className='fpimg' />
    <span className='fpName'>Taj Hotel</span>
    <span className='fpcity'>Mumbai</span>
    <span className='fpPrice'>Starting from $160</span>
    <div className='fpRating'>
        <button>8.9</button>
        <span>Excellent</span>
    </div>
</div>

<div className='fpTItem'>
    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Oberoi" className='fpimg' />
    <span className='fpName'>Hotel Oberoi</span>
    <span className='fpcity'>New Delhi</span>
    <span className='fpPrice'>Starting from $180</span>
    <div className='fpRating'>
        <button>8.5</button>
        <span>Very Good</span>
    </div>
</div>

<div className='fpTItem'>
    <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Udaipur Palace Hotel" className='fpimg' />
    <span className='fpName'>Udaipur Palace Hotel</span>
    <span className='fpcity'>Udaipur</span>
    <span className='fpPrice'>Starting from $150</span>
    <div className='fpRating'>
        <button>9.1</button>
        <span>Excellent</span>
    </div>
</div>

    </div>
  )
}

export default FeaturePropery
