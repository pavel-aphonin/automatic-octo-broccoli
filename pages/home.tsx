import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {

  const router = useRouter();




  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login')
    }
  }, [])

  return (
    <div>
      Home
    </div>
  )

}

export default Home;