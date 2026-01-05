'use client'
import { FaArrowRight } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { LuPalette } from "react-icons/lu";
import { LuZap } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";


export default function Home() {

  const stats = [
    {
      number: "15+",
      label: "Completed Projects"
    },
    {
      number: "98%",
      label: "Satisfied customers"
    },
    {
      number: "2+",
      label: "Years of experiences"
    },
    {
      number: "24/7",
      label: "Support available"
    }
  ];

   const services = [
    {
      icon: IoCodeSlash,
      title: "Web Development",
      description: "Modern and high-performing websites using the latest technologies.",
      color: "bg-blue-500"
    },
    {
      icon: LuPalette,
      title: "Creative Design",
      description: "Elegant and intuitive interfaces that captivate your visitors.",
      color: "bg-blue-500"
    },
    {
      icon: LuZap,
      title: "Performance",
      description: "Maximum optimization for ultra-fast loading times.",
      color: "bg-blue-500"
    }
  ];

   const testimonials = [
    {
      name: "Marie Dupont",
      role: "CEO, TechStart",
      rating: 5,
      text: "Exceptional work! The site exceeded our expectations.",
      avatar: "MD",
      color: "bg-blue-500"
    },
    {
      name: "Jean Martin",
      role: "Director, AgenceX",
      rating: 5,
      text: "Professionalism and creativity at their best. I recommend!",
      avatar: "JM",
      color: "bg-blue-500"
    },
    {
      name: "Sophie Bernard",
      role: "Founder, iBloom",
      rating: 5,
      text: "A perfect collaboration from start to finish. Magical result!",
      avatar: "SB",
      color: "bg-blue-500"
    }
  ];


  return (
    <>
      <section className="bg-linear-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Label */}
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FaRegStar className="w-4 h-4 text-blue-500" />
              <span>Responsible for your new projects</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Let's create<br />
              your digital<br />
              <span className="text-blue-500">presence</span><br />
              <span className="text-blue-600">together</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-md">
              I design unique web experiences that transform your visitors into loyal customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition flex items-center gap-2 text-sm font-medium">
                Start a project
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button className="text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition text-sm font-medium">
                Discover my services
              </button>
            </div>
          </div>

          {/* Right Content - Image Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-purple-100 via-blue-100 to-purple-200 p-8">
              {/* Team Image */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Rating Badge */}
              <div className="absolute top-12 right-12 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0 Rating</span>
              </div>

              {/* Projects Counter */}
              <div className="absolute bottom-16 left-12 bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-gray-600">Completed Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


     <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


     <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium mb-4">What I propose</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solutions tailored to your needs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive approach to creating exceptional digital experiences          
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <a 
            href="#services" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium transition group"
          >
            View all services
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>



    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-medium mb-4">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What my clients say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to transform your vision into reality?
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Let's discuss your project and create something exceptional together.
        </p>

        {/* CTA Button */}
        <button className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition inline-flex items-center gap-2 text-base font-medium shadow-lg hover:shadow-xl">
          Contact me now
          <FaArrowRight className="w-5 h-5 text-white"  />
        </button>
      </div>
    </section>
    </>
  );
}
