

const Hiring = () => {
    return (
        <div className="bg-red-800 p-24">
            {/* <div className="card card-side  shadow-xl bg-red-800">
                <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div> */}
            <h2 className="text-5xl font-extrabold text-center text-white">First Time Truck Hiring</h2>
            <div className="flex relative bg-red-900 p-4">
                <div className="w-1/2 text-white absolute bottom-0 left-5">
                    <p className="font-bold">Enjoy</p>
                    <h2 className="text-5xl font-extrabold">1500</h2>
                    <p className="font-bold">Discount</p>
                </div>
                <div className="w-1/2 absolute left-0 right-5-20">
                    <span><h2 className="text-5xl font-bold ">Welcome</h2></span>
                    <p>To get the offer you need to use the promo code: WELCOME</p>
                </div>
            </div>
        </div>
    );
};

export default Hiring;