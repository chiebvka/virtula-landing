
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import Alternate from './Alternate'


export default function Hero() {
  return (
    <div  className="bg-white ">
        <header className=" inset-x-0 top-0 z-50">
            <DesktopNavigation />
            <MobileNavigation />
        </header>
        <Alternate />
      
    </div>
  )
}