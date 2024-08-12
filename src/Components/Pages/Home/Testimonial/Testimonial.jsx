import React from 'react';

const Testimonial = () => {
    return (
        <div className=' mt-32 '>
            <h2 className="text-orange-400 text-2xl text-center font-bold">Testimonia</h2>
            <h1 className="text-4xl font-bold text-center mt-5">What Customer Says</h1>
            <p className="text-center mt-5"> the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>

            <div className='flex gap-10 justify-evenly mt-10 '>
            <div className="card bg-slate-100 w-96 shadow-xl bottom-10 mt-10">
                <div className="avatar pt-10 pl-8">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        Awlad Hossain
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <div className="card-actions justify-end">
                    <div className="btn badge-outline">go </div>
                    </div>
                </div>
            </div>
            <div className="card bg-slate-100 w-96 shadow-xl bottom-10 mt-10">
                <div className="avatar pt-10 pl-8">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        Abid Hasan
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <div className="card-actions justify-end">
                        <div className="btn badge-outline">go </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonial;