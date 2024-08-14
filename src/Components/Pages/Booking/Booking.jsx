import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Booking = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    console.log(bookings)
    useEffect(() => {
        fetch(`Service.json?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    const handleDelete = (id) => {
        const proceed = confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`Service.json/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Delete success");
                        const remaining = bookings.filter((booking) => booking._id !== id);
                        setBookings(remaining);
                    }
                });
        }
    };

    const handleBookingConfirm = (id) => {
        fetch(`Service.json/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: "confirm" }),
        })
    };
 

        return (
            <div>
                <h2 className="text-2xl text-center mb-12">My bookings :{bookings.length} </h2>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings?.map((booking) => (
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
};


export default Booking;