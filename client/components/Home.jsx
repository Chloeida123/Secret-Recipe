import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFoods } from '../actions/foods'

function Home() {
    const foods = useSelector((state) => state.foods)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFoods())
    }, [])

   
    
    return (
        <>
            <div className='flex'>
                {foods.map((data) => {
                    return (
                        <div key={data.id}>
                            <img className='img-fluid img-thumbnail' width='350' height='350' src={data.images}/>
                            <h2 className='txtsize'>{data.name}</h2>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home