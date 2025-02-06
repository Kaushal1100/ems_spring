import React, { useState } from 'react';
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, email};
        console.log(employee);

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees');
        }).catch((error) => {
            console.error("Error saving employee", error);
        });
    }

    return (
        <div className="form-container">
            <form className='form'>
                    <div className='form-group mb-2'>
                         <div>
                             <label className='form-label'>First Name</label>
                                <input
                                    required
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={handleFirstName}>
                                </input>
                         </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    required
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={handleLastName}>
                                </input>
                            </div>


                            <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    required
                                    type='text'
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={handleEmail}>
                                </input>
                            </div>
                            
                            <button className='btn btn-success' onClick={saveEmployee}>Save Employee</button>

                            
                        </div>
                 </form>
                
            </div>
   
)

}

export default EmployeeComponent