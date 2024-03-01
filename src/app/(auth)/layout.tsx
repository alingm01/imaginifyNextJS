import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='autho'>
      {children}
    </main>
  )
}

export default Layout