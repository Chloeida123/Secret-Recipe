import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFoods } from '../actions/foods'

export function Foods() {
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
                            <img className='imgsize' src={data.images}/>
                            <p className='txtsize'>{data.name}</p>
                            <p>{data.description}</p>
                            <p>Ingredients: {data.ingredients.split(',').map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}</p>
                            <p>Directions: {data.directions.split(',').map((direction, index)=> (
                                <li key={index}>{direction}</li>
                            ))}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Foods