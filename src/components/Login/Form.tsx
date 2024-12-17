import SocialAuthButtons from '../Patient/SocialAuthButtons'

const Form = () => {
    return (
        <div className="flex items-center justify-center border bottom-2 text-black w-[35rem] rounded-[10px]">
            <div className="bg-white p-8 rounded-lg  w-[35rem] min-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-500">Log Into Your Account</h1>

                <form action="login" className='flex flex-col '>
                    <label htmlFor="email" className="mb-2 text-gray-700 ">Email or Phone Number</label>
                    <input type="text" placeholder='Email or Phone number' className="mb-4 p-2 border rounded-md bg-white " />
                    <label htmlFor="password" className="mb-2  text-gray-700">Password</label>
                    <input type="password" placeholder='Password' className="mb-4 p-2 border rounded-md bg-white " />
                    <div className="mb-4 text-right">
                        <a href="/reset-password" className="text-red-700 hover:underline">Forget your password?</a>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-4">
                        Log In
                    </button>
                    <p className="my-4 text-center text-blue-600 font-bold ">OR</p>
                    <SocialAuthButtons />
                </form>
            </div>
        </div>
    )
}

export default Form
