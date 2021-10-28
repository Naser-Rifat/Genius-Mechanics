import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Addservice.css'

const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);


        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert("added successfully");
                    reset();
                }
            })


    }
    return (
        <div className="add-service">
            <h2>Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" {...register("name", { required: true, maxLength: 20 })} />

                <textarea placeholder="description" {...register("description", { required: true })} />
                <input type="number" placeholder="price" {...register("price", { required: true })} />
                <input type="url" placeholder="img-url"{...register("img")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;