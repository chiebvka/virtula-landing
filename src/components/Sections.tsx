import React from 'react'
import { Separator } from './ui/separator'


const posts = [
    {
      id: 1,
      title: 'Cloud Services',
      href: '#',
      description:
        'We offer edge cloud services by offering reliable, secure, and innovative edge cloud technologies & services.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      img: "./cloud.png",
      category: { title: 'Marketing', href: '#' },
    },
    {
      id: 2,
      title: 'POS Terminal Deployments',
      href: '#',
      description:
        'Our POS deployment services include a highly trained group of professionals who provide hardware and software installation services to new and existing customers.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      img: "./pos.png",
    },
    {
      id: 3,
      title: 'Software Development',
      href: '#',
      description:
        'Custom software tailored to your unique business needs to help you reach your audience on the go',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      img: "./software.png",

    },
    // More posts...
  ]


export default function Sections() {
  return (
    <div className="bg-white py-24 sm:py-32" id='services'>
        <Separator className='my-8' />
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-locale sm:text-4xl">Our Services</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Some of our amazing service offeringsa to help you grow your business
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
            </div>
            <div className="relative mt-8 flex items-center justify-center gap-x-4">
              <img src={post.img} alt="" className="h-20 w-20 rounded-full border-2 border-locale object-contain bg-gray-50" />
       
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
  )
}