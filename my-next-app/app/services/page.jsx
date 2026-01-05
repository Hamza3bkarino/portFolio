import {
  FaCode,
  FaPalette,
  FaBolt,
  FaMobileAlt,
  FaGlobe,
  FaSearch,
  FaLayerGroup,
  FaShoppingCart,
  FaChartBar,
  FaCheck
} from "react-icons/fa";


export default function ServicesPage() {
  const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    features: ["Responsive design", "Fast loading times", "SEO optimized", "Secure & scalable"],
    color: "bg-blue-500"
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces that provide exceptional user experiences and drive conversions.",
    features: ["User research", "Wireframing & prototyping", "Visual design", "Usability testing"],
    color: "bg-purple-500"
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that work seamlessly on iOS and Android devices.",
    features: ["iOS & Android apps", "React Native", "App store deployment", "Push notifications"],
    color: "bg-green-500"
  },
  {
    icon: FaGlobe,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, high-performing digital presence.",
    features: ["Modern aesthetics", "Improved UX", "Performance boost", "Mobile optimization"],
    color: "bg-orange-500"
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store development with secure payment processing and inventory management.",
    features: ["Shopping cart", "Payment integration", "Product management", "Order tracking"],
    color: "bg-pink-500"
  },
  {
    icon: FaSearch,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
    features: ["Keyword research", "On-page SEO", "Technical SEO", "Analytics & reporting"],
    color: "bg-yellow-500"
  },
  {
    icon: FaBolt,
    title: "Performance Optimization",
    description: "Speed up your website with advanced optimization techniques for better user experience.",
    features: ["Page speed optimization", "Code minification", "Image optimization", "Caching strategies"],
    color: "bg-red-500"
  },
  {
    icon: FaLayerGroup,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive specific actions.",
    features: ["Conversion focused", "A/B testing ready", "Lead capture forms", "Analytics integration"],
    color: "bg-indigo-500"
  },
  {
    icon: FaChartBar,
    title: "Web Analytics",
    description: "Track and analyze your website performance with comprehensive analytics solutions.",
    features: ["Google Analytics setup", "Custom dashboards", "Conversion tracking", "User behavior insights"],
    color: "bg-teal-500"
  }
];


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className=" py-20 px-4 sm:px-6 lg:px-8 h-[80vh]" 
               style={{
                    backgroundImage: "url('/dev.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode:"multiply",
                    backgroundColor:"rgb(0,0,0,0.7)"
  }}
               
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-500 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. From design to development, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Icon */}
                  <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition font-medium">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition font-medium">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}