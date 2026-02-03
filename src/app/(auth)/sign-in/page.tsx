'use client'
 
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { login } from '@/app/actions/auth'
 
export default function LoginPage() {
  const [state, action] = useActionState(login, undefined)
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        
        <form action={action} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              id="email" 
              name="email" 
              placeholder="user@example.com" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
          </div>
 
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
             {state?.errors?.password && <p className="text-red-500 text-xs mt-1">{state.errors.password}</p>}
          </div>

          {state?.message && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                  {state.message}
              </div>
          )}
 
          <SubmitButton />
        </form>
         <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Don't have an account? <a href="/sign-up" className="text-blue-500 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
  )
}
 
function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button 
      disabled={pending} 
      type="submit"
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
    >
      {pending ? 'Signing In...' : 'Sign In'}
    </button>
  )
}
