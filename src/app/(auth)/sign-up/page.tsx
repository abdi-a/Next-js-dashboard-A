'use client'
 
import { useFormState, useFormStatus } from 'react-dom'
import { signup } from '@/app/actions/auth'
 
export default function SignupPage() {
  const [state, action] = useFormState(signup, undefined)
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        
        <form action={action} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name}</p>}
          </div>
 
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              id="email" 
              name="email" 
              placeholder="john@example.com" 
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
            <div className="text-xs text-gray-500 mt-1">
              At least 8 chars, 1 letter, 1 number, 1 special char.
            </div>
            {state?.errors?.password && (
              <div className="text-red-500 text-xs mt-1">
                <p>Password must:</p>
                <ul>
                  {state.errors.password.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
 
          <SubmitButton />
        </form>
        <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Already have an account? <a href="/sign-in" className="text-blue-500 hover:underline">Sign In</a></p>
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
      {pending ? 'Signing Up...' : 'Sign Up'}
    </button>
  )
}
