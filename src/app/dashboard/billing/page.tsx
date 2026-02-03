export default function BillingPage() {
    return (
      <div className="max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-slate-900">Billing & Subscription</h1>
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white mb-8 shadow-lg">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-semibold opacity-90">Current Plan</h2>
                    <p className="text-4xl font-bold mt-2">Free Tier</p>
                    <p className="mt-2 opacity-75">Your plan renews on March 1, 2026</p>
                </div>
                <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Upgrade to Pro
                </button>
            </div>
        </div>
  
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50">
                <h3 className="font-bold text-slate-900">Payment Methods</h3>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="w-12 h-8 bg-slate-200 rounded"></div>
                    <div>
                        <p className="font-medium text-slate-900">•••• •••• •••• 4242</p>
                        <p className="text-sm text-slate-500">Expires 12/28</p>
                    </div>
                    <span className="ml-auto text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">Default</span>
                </div>
                <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">
                    + Add new payment method
                </button>
            </div>
        </div>
      </div>
    )
  }
