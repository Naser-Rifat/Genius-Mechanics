import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'

const Experts = () => {

    const [exdata, setExData] = useState([]);


    useEffect(() => {
        fetch('./expert.data.json')
            .then(res => res.json())
            .then(data => setExData(data))
    }, [])
    return (
        <div className="services-container">
            <h1 className="text-primary mt-5 mb-2"> Our Experts</h1>
            <div id="experts" className="row">
                {
                    exdata.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;