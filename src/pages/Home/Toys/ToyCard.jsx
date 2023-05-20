import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";


const ToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext)
    const { toy_name, price, available_quantity, img, sub_category } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <h2 className="card-title text-center">{toy_name}</h2>
            <div className="card-body">
                <h2 className="card-title">Seller Name : {user?.displayName}</h2>
                <h3>Category : {sub_category}</h3>
                <p className="text-amber-600 font-bold">price : ${price}</p>
                <p>Available Quantity : {available_quantity}</p>
            </div>
        </div>
    );
};

export default ToyCard;