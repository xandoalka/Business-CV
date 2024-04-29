import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="lg:h-28 py-8 flex bg-white">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between w-10/12 lg:w-11/12 mx-auto lg:text-sm">
                <p className="order-2 lg:order-1">© 2024 Xando Alka. All rights reserved.</p>
                <div className="order-1 lg:order-2 flex flex-wrap items-center gap-6 lg:gap-8 lg:text-center">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Call</p>
                        <a href="tel:+6281368449213">0813-6844-9213</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Write</p>
                        <a href="mailto:xandoalka@gmail.com">xandoalka@gmail.com</a>
                    </div>
                    <div className="flex flex-col gap-4 lg:gap-2">
                        <p className="font-semibold">Follow</p>
                        <span className="flex gap-4">
                            <a className="text-2xl lg:text-base" href="https://www.facebook.com/xandoalka" target="_blank"><FaFacebookF /></a>
                            <a className="text-2xl lg:text-base" href="https://twitter.com/xandoalka" target="_blank"><FaTwitter /></a>
                            <a className="text-2xl lg:text-base" href="https://www.linkedin.com/in/xandoalka" target="_blank"><FaLinkedinIn /></a>
                            <a className="text-2xl lg:text-base" href="https://www.instagram.com/xandoalka" target="_blank"><FaInstagram /></a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer