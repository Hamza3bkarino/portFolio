'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/hamza_image.jfif" 
              alt="About me"
              width={500}
              height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            I’m <span className="font-semibold text-gray-900">Hamza</span>, a passionate web developer who loves building modern,
            fast, and user-friendly web applications. I focus on clean code,
            performance, and real-world solutions.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            From frontend interfaces to backend logic, I enjoy transforming
            ideas into digital experiences that look great and work perfectly.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-500">15+</h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-500">2+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-500">100%</h3>
              <p className="text-sm text-gray-500">Passion</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a
              href="/contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              onClick={()=>router.push('/contact')}
            >
              Contact Me
            </a>

            <a
              href="/projects"
              className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition"
              onClick={()=>router.push('/projects')}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
