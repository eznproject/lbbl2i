import Image from 'next/image';
import Link from 'next/link';
import Logo from '../asset/img/new-logo.png';

const baseUrlNav = 'http://localhost:8000/';


//Request Data Menu nav
interface ValidationMenuNav {
  id: number,
  href: string;
  value: string;
}

const menuNav = async () => {
  const response = await fetch(baseUrlNav, {
    cache: "no-store"
  });
  const datas: ValidationMenuNav[] = await response.json();
  return(
    <>
      {
        datas.map((data) => {
          return  <Link key={data.id} href={data.href}>{data.value}</Link>
        })
      }
    </>
  )
}


//End Request Data Menu Nav
export default function Navbar() { 
  return (
    <>
      <div className='sticky top-0 flex items-center justify-between bg-red-200  '>
      
      <Image className='w-[250px]' src={Logo} alt="Logo"></Image>
      <div className='flex gap-10'>
        {/* {menuNav()} */}
      </div>
      <div>
        Event Promo
      </div>
    </div>
    </>  
    
  );
};