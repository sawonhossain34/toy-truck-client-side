import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";


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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    toys.map(toy => <ToyCard
                    key={toy.id}
                    toy={toy}
                    >
                    </ToyCard>)
                }
            </div>
        </div>
    );
};

export default Toys;
