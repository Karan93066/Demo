import React, { useState } from 'react';

function CancelledSubscriptions() {
    // Demo data for canceled subscriptions with a status field
    const [cancelledSubscriptions, setCancelledSubscriptions] = useState([
        {
            id: 1,
            name: 'John Doe',
            reason: 'Too expensive',
            date: '2024-10-20',
            status: 'Pending',
        },
        {
            id: 2,
            name: 'Jane Smith',
            reason: 'No longer needed',
            date: '2024-10-22',
            status: 'Pending',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            reason: 'Switched to another service',
            date: '2024-10-23',
            status: 'Pending',
        },
    ]);

    // Function to toggle the status of a subscription
    const toggleStatus = (id) => {
        setCancelledSubscriptions((prevSubscriptions) =>
            prevSubscriptions.map((subscription) =>
                subscription.id === id
                    ? { ...subscription, status: subscription.status === 'Pending' ? 'Resolved' : 'Pending' }
                    : subscription
            )
        );
    };

    return (
        <div className="min-h-screen  text-gray-200 p-6">
            <h1 className="text-2xl font-semibold text-red-500 mb-4">Cancelled Subscriptions</h1>
            <div className="w-full overflow-x-auto bg-gray-800 rounded-lg shadow-md">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-700 text-red-500">
                            <th className="p-4">Name</th>
                            <th className="p-4">Cancellation Reason</th>
                            <th className="p-4">Cancellation Date</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cancelledSubscriptions.map((subscription) => (
                            <tr key={subscription.id} className="border-b border-gray-700 hover:bg-gray-700">
                                <td className="p-4 text-gray-300">{subscription.name}</td>
                                <td className="p-4 text-gray-300">{subscription.reason}</td>
                                <td className="p-4 text-gray-300">{subscription.date}</td>
                                <td className="p-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            subscription.status === 'Pending' ? 'bg-red-500' : 'bg-green-500'
                                        }`}
                                    >
                                        {subscription.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button
                                        onClick={() => toggleStatus(subscription.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded"
                                    >
                                        {subscription.status === 'Pending' ? 'Mark as Resolved' : 'Mark as Pending'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {cancelledSubscriptions.length === 0 && (
                <p className="text-center text-lg text-gray-300 mt-8">No canceled subscriptions found.</p>
            )}
        </div>
    );
}

export default CancelledSubscriptions;
