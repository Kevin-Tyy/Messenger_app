// "use client"
// import { signOut } from 'next-auth/react'
import EmptyState from '../components/EmptyState'
const Users = () => {
  return (
    // <button onClick={() => signOut()}>Logout</button>
    <div className='hidden lg:block lg:pl-80 h-full'>
      <EmptyState/>
    </div>
    )
}

export default Users