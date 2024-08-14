import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Card = ({ ServiceItem }) => {

    const {user} = useContext(AuthContext)
    const { title, img, price,_id } = ServiceItem
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions">
                    {
                        user? <Link to={`/checkOut/${_id}`}><button className="btn btn-primary">Check Out</button></Link> :
                        <Link to="/login"><button className="btn btn-primary">Check Out</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;