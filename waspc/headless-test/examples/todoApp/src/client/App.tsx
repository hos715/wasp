import { Link } from '@wasp/router'

import logout from '@wasp/auth/logout'
import useAuth from '@wasp/auth/useAuth'
import { useQuery } from '@wasp/queries'
import getDate from '@wasp/queries/getDate'

import './Main.css'
import { getName } from './user'

export function App({ children }: any) {
  const { data: user } = useAuth()
  const { data: date } = useQuery(getDate)

  const name = user ? getName(user) : null

  return (
    <div className="app border-spacing-2 p-4">
      <header className="flex justify-between">
        <h1 className="font-bold text-3xl mb-5">
          <Link to="/">ToDo App</Link>
        </h1>
        <h2>Your site was loaded at: {date?.toLocaleString()}</h2>
        {user && (
          <div className="flex gap-3 items-center">
            <div>
              Hello, <Link to="/profile">{name}</Link>
            </div>
            <div>
              <button className="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="mt-8 text-center">Created with Wasp</footer>
    </div>
  )
}
