import React from 'react'

import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import RightSidebar from '@/components/ui/RightSidebar'

const Home = () => {
  const loggedIn = {firstName:'Kell', lastName:'Jorris', email:'contact@Zorbital.sub'}

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName||'Guest'}
            subtext='Access and manage your account and transactions efficiently'
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500}]}
      />
    </section>
  )
}

export default Home