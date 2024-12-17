import Form from '../../components/Login/Form'

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-white'>
      <div className="flex flex-col items-center justify-center w-[96rem] p-10 shadow-lg rounded-lg">
        <h1 className='text-black text-3xl font-semibold mb-6 text-center text-blue-600 '>Welcome back to Insta Health</h1>
        <Form />
      </div>
    </div>
  )
}

export default Login
