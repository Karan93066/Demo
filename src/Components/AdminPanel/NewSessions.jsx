import React, { useState } from 'react';

function NewSessionForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [meetingLink, setMeetingLink] = useState('');
    const [time, setTime] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && meetingLink && time) {
            setSuccessMessage('Session created successfully!');
            // Add API call here to save the session details in the backend
        } else {
            setSuccessMessage('Please fill all the fields');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-200">
            <div className="w-full max-w-lg p-8 space-y-8 bg-black rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-red-500">Create New Session</h2>
                {successMessage && <p className="text-center text-green-500">{successMessage}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter session title"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter session description"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Meeting Link</label>
                        <input
                            type="url"
                            value={meetingLink}
                            onChange={(e) => setMeetingLink(e.target.value)}
                            className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter meeting link"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Time</label>
                        <input
                            type="datetime-local"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 font-semibold bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        Create Session
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewSessionForm;
