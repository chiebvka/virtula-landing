

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why', href: '#why' },
    { name: 'Company', href: '#' },
  ]

export default function DesktopNavigation() {
  return (
    <div>
        <nav className="hidden lg:flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          <a href="/" className='protest-revolution-regular font-bold text-3xl text-locale'>
            <span className="sr-only">Your Company</span>
            VirtualsGlobal
          </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
    </div>
  )
}