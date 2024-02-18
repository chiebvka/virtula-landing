import { CheckCheck } from 'lucide-react'
import React from 'react'


const includedFeatures = [
    'Tailored Solutions',
    'Scalability',
    '24/7/365 Support',
    'Streamlined Business Operations',
    'Innovation',
    'Peace of Mind',
  ]

export default function Price() {
  return (
    <div className="bg-white py-24 sm:py-32" id='why'>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-locale sm:text-4xl">Why Virtuals Global?</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        We empower our clients to serve their clients better by creating meaningful solutions to drive excellence
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Perks Enjoyed  by our Clients</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Once we have youb onbvoarded as a client you get to experience some worl class service to better help you serve your clients and all their needs. Listed below are some of the perks enjoyed by our partners and clients
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-locale">What’s included</h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckCheck className="h-6 w-5 flex-none text-locale" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col shadow-lg lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">Want to know more?</p>
              {/* <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
              </p> */}
              
              <a
                href="mailto:operations@virtualsglobal.com"
                className="mt-10 block w-full rounded-md bg-locale px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-locale"
              >
                Send an Email
              </a>
              <p className="mt-6 text-xs leading-5 text-gray-600">
                or send an email directly to operations@virtualsglobal.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}