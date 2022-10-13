import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate, useParams} from 'react-router-dom'
import { fetchFoods } from '../actions/foods'
import Button from 'react-bootstrap/Button'


function Foods() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams()
    const foodIdArr = useSelector((state) => state.foods)
    const foodDetail = foodIdArr.length > 0 && foodIdArr.find(e => e.id == id)
   
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
                <Button onClick ={()=> navigate(-1)}>Back</Button>

            </div>
        </>
    )
}


export default Foods