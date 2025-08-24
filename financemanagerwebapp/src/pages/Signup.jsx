import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {assets} from "../assets/assets.js";
import Input from "../components/Input.jsx";


const Signup = () => {

    const [fullName , setFullName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error,setError] = useState(null);

    const navigate  = useNavigate();




    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            
            <img src={assets.login_bg} alt="Background" className="absolute inset-0 w-full h-full object-cover filter blur-sm" />
            

            <div className="relative z-10 w-full max-w-lg px-6">

                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
                    <h3 className="text-2xl font-semibold text-black text-center mb-2">
                            Create An Account
                    </h3>

                    <p className="text-sm text-slate-700 text-center mb-8">
                            Start tracking your spendings by joining with us.
                    </p>

                    <form action="" className="space-y-4">
                    
                    <div className="flex justify-center mb-6"></div>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">


                        <Input

                            lable = "Full Name"
                            value = {fullName}
                            type = "text"
                            placeholder="Full name"
                            onChange = {(e) => setFullName(e.target.value)}

                        />

                        <Input

                            lable = "Email"
                            value = {email}
                            type = "text"
                            placeholder="Email Address"
                            onChange = {(e) => setEmail(e.target.value)}

                        />


                        <div className="col-span-2">

                        <Input

                            lable = "Password"
                            value = {password}
                            type = "password"
                            placeholder="********"
                            onChange = {(e) => setPassword(e.target.value)}

                        />
                        <h4 className="justify-center">Made with ❤️ by Aniket </h4>

                        </div>

                        
                    </div>

                    </form>

                </div>


                


            </div>



            
            
            
            
        </div>
    )
}

export default Signup;