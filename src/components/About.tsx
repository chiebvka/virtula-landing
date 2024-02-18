import React from 'react'



const links = [
    { name: 'Customer-Centric Approach:', href: '#' },
    { name: 'Partnership', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Community Engagement', href: '#' },
  ]
  const stats = [
    { name: 'Integrity', value: '12' },
    { name: 'Collaboration', value: '300+' },
    { name: 'Excellence', value: '40' },
    { name: 'Continous Learning', value: 'Unlimited' },
  ]
export default function About() {
      

        return (
          <div className="relative isolate overflow-hidden bg-blue-900 py-24 sm:py-32" id='about'>
            {/* <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            /> */}
            <div
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#46ffcb] to-locale opacity-20"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-locale opacity-20"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-locale sm:text-4xl">About Us</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                 We offer a comprehensive suite of services to propel your business forward. With a focus on innovation and excellence, we empower you to succeed in the digital age
                </p>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="mx-auto max-w-2xl my-3 lg:mx-0">
                <h2 className="text-lg font-bold tracking-tight text-locale sm:text-xl">Our Mission</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                 Our mission is to empower businesses through innovative and reliable technology solutions and we plan on achieving that with our guides listed below. 
                </p>
              </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 mb-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                  {links.map((link) => (
                    <a key={link.name} href={link.href}>
                      {link.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                  ))}
                </div>

                <div className="mx-auto max-w-2xl my-3 lg:mx-0">
                <h2 className="text-lg font-bold tracking-tight text-locale sm:text-xl">Our Values</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                 Our  values guide everything we do. They define who we are, how we work, and what we stand for. Our commitment to these values ensures that we empower businesses through innovative and reliable technology solutions. 
                </p>
              </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 mb-8  text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                  {stats.map((link) => (
                    <div key={link.name} >
                      {link.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }
      
