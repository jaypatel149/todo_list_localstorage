import React from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from'react-router-dom';
const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
    localStorage.setItem('formData', JSON.stringify(data));
    alert('Form submitted successfully!');
    navigate('/');
    reset();
  };

  return (
    <div className="container 100vh">
      <div className="card bg-dark text-white p-5" style={{margin:"auto", width:"100%" ,maxWidth:"600px" ,marginTop:"5rem"}}>
        <h2 className="text-center mb-2">Todo List</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              id="firstName"
              {...register('firstName', {
                required: 'First name is required',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'First name should only contain letters',
                },
              })}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              id="lastName"
              {...register('lastName', {
                required: 'Last name is required',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'Last name should only contain letters',
                },
              })}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="number" className="form-label">
              Phone Number:
            </label>
            <input
              type="tel"
              className={`form-control ${errors.number ? 'is-invalid' : ''}`}
              id="number"
              {...register('number', {
                required: 'Phone number is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Invalid phone number format (10 digits)',
                },
              })}
              placeholder="123-456-7890"
            />
            {errors.number && (
              <div className="invalid-feedback">{errors.number.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

