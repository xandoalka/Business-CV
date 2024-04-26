import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="h-28 flex bg-white">
            <div className="flex items-center justify-between w-11/12 mx-auto text-sm">
                <p>© 2024 Xando Alka. All rights reserved.</p>
                <div className="flex items-center gap-8 text-center">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Call</p>
                        <a href="tel:+6281368449213">0813-6844-9213</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Write</p>
                        <a href="mailto:xandoalka@gmail.com">xandoalka@gmail.com</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Follow</p>
                        <span className="flex gap-4">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaInstagram /></a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer