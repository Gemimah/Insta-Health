import React from 'react'

const Welcome = () => {

    const user = [
        {radio: 1, type: "doctor"},
        {radio: 2, type: "patient"}
    ]

  return (
    <>
    <img src="/Group 1000001874.png" alt="" />
    <div>
        <h1>Welcome To InstaHealth Platform</h1>
        <p>{if (radio == 1 : `Hello {user.type} create you account on instahealth and talk to different patients ` ? ` Hello {user.type} create your account on InstaHealth and get consolted by pro Doctore`)}</p>
        <div className=''>
            <span className='w-[15px] h-[15px] bg-[#0086AD] '>1</span>
            <p>Basic Information</p>
        </div>
    </div>
    </>
  )
}

export default Welcome