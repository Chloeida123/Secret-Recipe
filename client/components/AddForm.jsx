import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { fetchAddedFood } from '../actions/foods'
import { useNavigate } from 'react-router-dom'

function addedFood() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dataForm, setDataForm] = useState(null)

  const handleSubmit = async () => {
    // e.preventDefault()
    dispatch(fetchAddedFood(dataForm))
    navigate('/')
  }

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
          <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the detail"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the ingredients"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Directions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter directions"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Images</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the photo"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}

export default addedFood