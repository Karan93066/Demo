import React, { useState } from 'react';

function CancelSubscription() {
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && reason) {
            setSubmitted(true);
            // Add API call here to handle cancellation logic
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
            <div className="w-full max-w-lg p-8 space-y-8 bg-black rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-red-500">Cancel Subscription</h2>
                {submitted ? (
                    <p className="text-center text-green-500">Your cancellation request has been submitted.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Reason for Cancellation</label>
                            <textarea
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                placeholder="Briefly explain your reason for cancellation"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 mt-4 font-semibold bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                        >
                            Submit Cancellation
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default CancelSubscription;
