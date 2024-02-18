
// import { useState } from 'react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "./ui/sheet"

import { AlignLeft } from 'lucide-react'

// const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why', href: '#why' },
    { name: 'Company', href: '#' },
  ]


export default function MobileNavigation() {
  return (
    <div className='mx-auto  lg:hidden w-full items-center border-2 border-black justify-between p-3 '>
        {/* <div className="fixed inset-0 z-50" /> */}
        <div className='flex justify-between'>
                <Sheet >
                    <SheetTrigger>
                        <AlignLeft />
                    </SheetTrigger>
                    <SheetContent side="left" className=' p-4   divide-y divide-gray-500/10 w-[350px]'>
                        <a href="/" className='protest-revolution-regular font-bold text-locale  '>
                            VirtualsGlobal
                        </a>
                        <div className="my-5  flex  flex-col gap-y-4">
                            {navigation.map((item) => (
                                <SheetClose key={item.name}  asChild >
                                    <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                        {item.name}
                                    </a>
                                </SheetClose>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
                <a href="/" className='protest-revolution-regular font-bold text-locale  '>
                            VirtualsGlobal
                        </a>
            </div>
    </div>
  )
}