import React, { useState } from 'react';

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match');
            setSuccess('');
        } else {
            setError('');
            setSuccess('Password changed successfully!');
            // Add API call here to update the password in the backend
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-200">
            <div className="w-full max-w-lg p-8 space-y-8 bg-black rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-red-500">Change Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium ">Current Password</label>
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-lg focus:ring focus:ring-red-500 outline-none"
                            placeholder="Enter current password"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-lg focus:ring focus:ring-red-500 outline-none"
                            placeholder="Enter new password"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Confirm New Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 bg-gray-700 rounded-lg focus:ring focus:ring-red-500 outline-none"
                            placeholder="Confirm new password"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 font-semibold bg-red-500 hover:bg-red-600 rounded-lg  focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
