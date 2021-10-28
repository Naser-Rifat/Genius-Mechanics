import React, { useEffect, useState } from 'react';

const Manageservice = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (id) => {
        const procced = window.confirm("Are you sure? You want to Delete?")
        if (procced) {
            fetch(`http://localhost:5000/services/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining);
                        alert('deleted successfully')
                    }

                })
        }


    }
    return (
        <div>
            <h1>Manage Data</h1>
            {
                services.map(service =>
                    <div key={service._id}>
                        <h1>{service.name}</h1>
                        <button onClick={() => handleDelete(service._id)}> Delete</button></div>)
            }
        </div>
    );
};

export default Manageservice;