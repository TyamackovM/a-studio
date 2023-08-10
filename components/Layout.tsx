import React, { ReactNode}  from 'react';
import Header from './Header';

//* fonts
import {Sora} from '@next/font/google'
import { Playfair_Display, Jost} from '@next/font/google';

//*font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const playfair = Playfair_Display({
  subsets: ['cyrillic'],
  weight: ['600', '700', '800'],
  style: 'italic'
})

const jost = Jost({
  style: 'italic',
  subsets: ['cyrillic'],
  weight: ['500', '600', '700', '800']
})

type LayoutProps = {
  children: ReactNode;
}

const Layout: React.FC <LayoutProps> = ({children}) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${jost.className} font-sora relative`}>
      <Header />
      {children}
    </div>
  )
}

export default Layout;