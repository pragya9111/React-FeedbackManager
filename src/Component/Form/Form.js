import React from 'react'
import '../Form/Form.css'
import { useForm } from 'react-hook-form'
import { addFeedback } from '../../Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Form() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector(state => state.feedback.feedback)
    console.log(state)
    const { register, handleSubmit } = useForm()
    const handler = (data) => {
        dispatch(addFeedback(data))
        console.log(data)
        navigate('/display')
    }

    return (
        <div className='container'>
           
            <div className='form'>
            <div className='head'><h3>Add your feedback</h3> </div>
                <form onSubmit={handleSubmit(handler)}>
                    <input type='text' name='name' placeholder='Enter name' {...register("name")} />
                    <input type='number' name='contact' placeholder='Enter contact' {...register("contact")} />
                    <input type='text' name='email' placeholder='Enter email' {...register("email")} />
                    <input type='text' name='feedback'  className='fb' placeholder='Write your feedback' {...register("feedback")} /><br></br>
                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>

    )
}

export default Form