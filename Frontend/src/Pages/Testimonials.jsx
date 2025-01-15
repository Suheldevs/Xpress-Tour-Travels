import React from 'react'
import { Link } from 'react-router-dom'

function Testimonials() {
  return (
    <div className="">
<h1 className="breadcrumb relative py-10  font-bold text-center mb-12 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-3xl">What Our Clients Says</div>
        <div className="relative z-10 text-lg mt-2">
          <Link to='/' className="hover:text-secondary hover:cursor-pointer">
            Home
          </Link>{" "}
          / Testimonials
        </div>
      </h1>

<iframe src="https://widget.tagembed.com/2147211" className='w-full min-h-screen  my-8 bg-slate-50 px-6'></iframe>

    </div>
  )
}

export default Testimonials