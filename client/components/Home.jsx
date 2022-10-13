import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {fetchDeleteFood, fetchFoods } from '../actions/foods'

function Home() {
    const foods = useSelector((state) => state.foods)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchFoods())
    }, [])

    const handleClick = (e, id) => {
        e.preventDefault()
        navigate(`/api/v1/foods/${id}`)
    }

    const handleDelete = (e,id) => {
        e.preventDefault()
        dispatch(fetchDeleteFood(id))
    }

    return (
        <>
            <div className='flex'>
                {foods.map((data) => {
                    return (
                        <div key={data.id}>
                            <img className='img-fluid img-thumbnail' width='350' height='350' src={data.images} />
                            <div className='d-flex flex-column bd-highlight mb-3'>
                                <div className='tp-2 bd-highlight'><h2>{data.name}</h2></div>
                            </div>
                            <Button onClick={(e) => handleClick(e, data.id)}>The Recipe</Button>
                            <Button onClick ={(e)=> handleDelete(e, data.id)}>Delete</Button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home