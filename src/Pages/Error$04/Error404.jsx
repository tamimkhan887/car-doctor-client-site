import { Link } from "react-router-dom";
import errorImg from "../../assets/icons/Frame.svg";

const Error404 = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-md">
                
                <img 
                    src={errorImg} 
                    alt="404 Error" 
                    className=""
                />

                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Oops! Page Not Found
                </h1>

                <p className="text-gray-500 mb-6">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link to="/">
                    <button className="btn btn-error btn-soft px-8 animate-bounce ">
                        Back To Home
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Error404;
