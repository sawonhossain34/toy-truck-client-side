import hiring from '../../../assets/images/quality/hiring.jpg';

const Hiring = () => {
    return (
        <div className="card md:card-side bg-red-300 p-5 shadow-xl my-12">
            <figure><img src={hiring} alt="Album" /></figure>
            <div className="card-body text-red-600 pl-12">
            <p className='text-2xl'>Enjoy</p>
                <h2 className="card-title text-6xl">Discount !!</h2>
                <p className='text-4xl'>1500 <span className='text-2xl'>%</span> </p>
                <div className="card-actions justify-end">
                    <button className="btn bg-red-700">Shop Now</button>
                </div>
            </div>
        </div>
        // <div className="hero min-h-screen  bg-red-200 p-4">
        //     <div className="hero-content flex-col lg:flex-row  ">
        //         <div className='w-1/2 text-center text-white '>
        //             <p className="font-bold">Enjoy</p>
        //             <h2 className="text-5xl font-extrabold">1500</h2>
        //             <p className="font-bold">Discount</p>
        //         </div>
        //         <div className="w-1/2">
        //             <img src={hiring} className="max-w-sm rounded-lg shadow-2xl" />

        //         </div>
        //     </div>
        // </div>
    );
};

export default Hiring;