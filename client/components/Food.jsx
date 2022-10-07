import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchFoods } from '../actions/foods'

function Foods() {
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log(id)
    const foodIdArr = useSelector((state) => state.foods)
    console.log(foodIdArr)
    const foodDetail = foodIdArr.length > 0 && foodIdArr.find(e => e.id == id)
    console.log(foodDetail)

    useEffect(() => {
        dispatch(fetchFoods())
    }, [])

    return (
        <>
            <div className='flex'>
                {foodDetail &&
                    <div key={foodDetail.id}>
                        <img className='img-fluid img-thumbnail' width='350' height='350' src={foodDetail.images} />
                        <h2 className='txtsize'>{foodDetail.name}</h2>
                        <p>{foodDetail.description}</p>
                        <p>Ingredients: {foodDetail.ingredients.split(',').map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}</p>
                        <p>Directions: {foodDetail.directions.split(',').map((direction, index) => (
                            <li key={index}>{direction}</li>
                        ))}</p>
                    </div>
                }

            </div>
        </>
    )
}


export default Foods