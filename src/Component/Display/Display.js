import React from 'react'
import '../Display/Display.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFeedback } from '../../Redux/Action/Action'

function Display() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.feedback.feedback)
  console.log(state)

  const deletehandler = (p) => {
    const arr = [...state]
    arr.splice(p.target.id, 1)
    dispatch(deleteFeedback(arr))
  }

  const hold = state.map((elem, id) => {
    return <div className='details' key={id} id={id}>
      <p><span>Name : </span> {elem.name}</p>
      <p><span>Contact : </span>{elem.contact}</p>
      <p><span>Email : </span> {elem.email}</p>
      <p><span>Feedback : </span>{elem.feedback}</p>
      <i class="ri-delete-bin-5-fill" id={id} onClick={deletehandler}></i>
    </div>

  })
  return (
    <div className='container2'>
      <div className='card'>
        {state.length > 0 ? hold : <h2>No Feedback to display</h2>}
      </div>
    </div>
  )
}

export default Display