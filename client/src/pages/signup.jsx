import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate ,Link } from 'react-router-dom';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';



function signUp() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [error , setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if(!Name || !Email || !Password){
                setError("Please fill all the fields");
                return;
            }

            if(Password.length < 6){
                setError("Password must be at least 6 characters long");
                return;
            }



            await axios.post('http://localhost:3000/auth/register', { Email, Password, Name });
            console.log("Sign up successful");
            setSuccess("Sign Up Successfully");
            setError("")
            setEmail("");
            setPassword("");
           setName("");
            navigate('/');
        }catch (error) {
            console.log("Error in sign up:", error); // Log the error here
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while signing up.");
            }
        }
    }


  return (
    <div>
    <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Sign Up</h2>
    <form className="mx-auto max-w-lg rounded-lg border" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 p-4 md:p-8">
      {error && <Alert color="failure" icon={HiInformationCircle} >
      <span className="font-medium">Info alert!</span> {error}
    </Alert>}
                    {success && <Alert color="success">{success}</Alert>}
      <div>
          <label htmlFor="name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">User Name</label>
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} className="w-full rounded border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>


        <div>
          <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
          <input type="email" value={Email} onChange={(e)=> setEmail(e.target.value)} className="w-full rounded border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
          <input type="password" value={Password} onChange={(e)=> setPassword(e.target.value)} className="w-full rounded border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>

        <button type='submit' className="block rounded-lg bg-[#05674A] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Register</button>

        
      </div>

      <div className="flex items-center justify-center bg-gray-100 p-4">
        <p className="text-center text-sm text-gray-500">All ready have an account? <Link to="/" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Login</Link></p>
      </div>
    
    </form>
  </div>
</div>
      
    </div>
  )
}

export default signUp
