import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotels/Hotel'

const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/hotels',
            element:<List/>
        },
        {
            path:'/hotels/:id',
            element:<Hotel/>
        }
    ]
)

const App = () => {
    return ( 
            <RouterProvider router={router}>
            
            

                
            </RouterProvider>



    )
}

export default App