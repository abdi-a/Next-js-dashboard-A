export default function SettingsPage() {
    return (
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-slate-900">Account Settings</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 divide-y divide-slate-100">
            {/* Notification Settings */}
            <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-4">Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-slate-900">Email Alerts</p>
                            <p className="text-sm text-slate-500">Receive daily summaries</p>
                        </div>
                        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                            <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-slate-900">Security Alerts</p>
                            <p className="text-sm text-slate-500">Notify me about new logins</p>
                        </div>
                         <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                            <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"/>
                        </div>
                    </div>
                </div>
            </div>
  
            {/* Danger Zone */}
            <div className="p-6">
                <h3 className="font-bold text-red-600 mb-4">Danger Zone</h3>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-slate-900">Delete Account</p>
                        <p className="text-sm text-slate-500">Permanently remove your account and data</p>
                    </div>
                    <button className="px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 text-sm font-medium">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
      </div>
    )
  }
