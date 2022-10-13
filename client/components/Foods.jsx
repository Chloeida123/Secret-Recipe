import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchFoods } from '../actions/foods'

function Foods() {
    const dispatch = useDispatch()
    const foods = useSelector((state) => state.foods)

    useEffect(() => {
        dispatch(fetchFoods())
    }, [])

    

    return (
        <>
            <div className='flex'>
                {foods.map((data) => {
                    return (
                        <div key={data.id}>
                            <img className='img-fluid img-thumbnail'width='350' height='350' src={data.images}/>
                            <h2 className='txtsize'>{data.name}</h2>
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