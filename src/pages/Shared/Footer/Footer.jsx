import logo from '../../../assets/logo truck.png';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-red-50 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-red-50 text-base-content border-base-300">
                <div className="items-center grid-flow-col space-y-3">
                    <div>
                    <img src={logo} alt="" />
                    <p className=" normal-case text-4xl font-bold">Toy Truck</p>
                    <p>Mirpur road 05 , Dhaka</p>
                    </div>
                    <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                    
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <SocialMedia></SocialMedia>
                    </div>
                </div>

            </footer>
            <footer className="footer footer-center p-4 bg-red-50 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Toy Truck</p>
                </div>
            </footer>   
        </div>
    );
};

export default Footer;