/*import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'*/
import { getSession, signOut } from 'next-auth/react'




export default function index({ session }) {

  const { user } = session

  /*const { data, status } = useSession() //sesion utilizando un react-hook desde frontend
  const router = useRouter()
  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'unauthenticated') {
    router.push('/login')

  }*/

  return (
    <div>
      {
        session ? (
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <img src={user.image} />
          </div>
        ) : (
          <p>Loading...</p>
        )
      }
      <button onClick={() => signOut()}>
        Logout
      </button>
    </div>
  )
}


export const getServerSideProps = async (context) => { //esto es como si fuera el backend

  const session = await getSession(context)

  if (!session) return {
    redirect: {
      destination: '/login',
      permantent: false
    }
  }

  return {
    props: {
      session: session
    }
  }
}
