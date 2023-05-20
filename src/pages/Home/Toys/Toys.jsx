import { useEffect, useState } from "react";


const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect( () => {
        fetch('toys.json')
        .then(res => res.json())
        .then(data => setToys(data))
    }  ,[])



    return (
        <div >
            <div className="text-center">
                <h2 className="text-5xl font-bold  text-sky-700">All Toys categorys Area</h2>
                <p className="text-2xl">Leading online automotive marketplace in Bangladesh</p>
            </div>
            <div>
                toys:{toys.length}
            </div>
        </div>
    );
};

export default Toys;
