import React, { useState } from 'react';

function SessionManager() {
    const [sessions, setSessions] = useState([
        { id: 1, title: 'Session 1', description: 'Description for session 1', meetingLink: 'http://meeting.com/1', time: '2024-10-30T10:00' },
        { id: 2, title: 'Session 2', description: 'Description for session 2', meetingLink: 'http://meeting.com/2', time: '2024-11-01T14:00' }
    ]);
    const [sessionToEdit, setSessionToEdit] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [sessionToDelete, setSessionToDelete] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const saveSession = (session) => {
        if (sessionToEdit) {
            setSessions(sessions.map((s) => (s.id === session.id ? session : s)));
            setSuccessMessage('Session updated successfully!');
        } else {
            setSessions([...sessions, { ...session, id: Date.now() }]);
            setSuccessMessage('Session created successfully!');
        }
        clearForm();
    };

    const deleteSession = () => {
        setSessions(sessions.filter((session) => session.id !== sessionToDelete.id));
        setShowDeletePopup(false);
        setSuccessMessage('Session deleted successfully!');
    };

    const clearForm = () => {
        setSessionToEdit(null);
        setShowForm(false);
        setSuccessMessage('');
    };

    return (
        <div className="min-h-screen  text-gray-200 p-4 sm:p-6">
            <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">Session Management</h1>

            {successMessage && <p className="text-center text-green-500 mb-4">{successMessage}</p>}

            {showForm ? (
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-md sm:max-w-lg p-4 sm:p-8 space-y-6 bg-black rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">
                            {sessionToEdit ? 'Edit Session' : 'Create Session'}
                        </h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                saveSession({
                                    id: sessionToEdit ? sessionToEdit.id : null,
                                    title: formData.get('title'),
                                    description: formData.get('description'),
                                    meetingLink: formData.get('meetingLink'),
                                    time: formData.get('time')
                                });
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm font-medium">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={sessionToEdit ? sessionToEdit.title : ''}
                                    className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={sessionToEdit ? sessionToEdit.description : ''}
                                    className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Meeting Link</label>
                                <input
                                    type="url"
                                    name="meetingLink"
                                    defaultValue={sessionToEdit ? sessionToEdit.meetingLink : ''}
                                    className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Time</label>
                                <input
                                    type="datetime-local"
                                    name="time"
                                    defaultValue={sessionToEdit ? sessionToEdit.time : ''}
                                    className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 mt-4 font-semibold bg-red-600 rounded-lg hover:bg-red-700"
                            >
                                {sessionToEdit ? 'Update Session' : 'Create Session'}
                            </button>
                            <button
                                type="button"
                                onClick={clearForm}
                                className="w-full py-2 mt-2 font-semibold bg-gray-600 rounded-lg hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <>
                    <div className="w-full">
                        <button
                            onClick={() => setShowForm(true)}
                            className="mb-4 py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 w-full sm:w-auto"
                        >
                            Create New Session
                        </button>
                        <h2 className="text-2xl font-bold text-red-500 mb-4">All Sessions</h2>
                        <div className="bg-gray-800 rounded-lg overflow-x-auto">
                            <table className="w-full text-left text-sm sm:text-base">
                                <thead>
                                    <tr className="bg-gray-700 text-red-500">
                                        <th className="p-3">Title</th>
                                        <th className="p-3">Description</th>
                                        <th className="p-3">Meeting Link</th>
                                        <th className="p-3">Time</th>
                                        <th className="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sessions.map((session) => (
                                        <tr key={session.id} className="border-b border-gray-700 hover:bg-gray-700">
                                            <td className="p-3">{session.title}</td>
                                            <td className="p-3">{session.description}</td>
                                            <td className="p-3">
                                                <a href={session.meetingLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                                                    Link
                                                </a>
                                            </td>
                                            <td className="p-3">{new Date(session.time).toLocaleString()}</td>
                                            <td className="p-3 space-x-2">
                                                <button
                                                    onClick={() => {
                                                        setSessionToEdit(session);
                                                        setShowForm(true);
                                                    }}
                                                    className="text-yellow-500 hover:text-yellow-600"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setSessionToDelete(session);
                                                        setShowDeletePopup(true);
                                                    }}
                                                    className="text-red-500 hover:text-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {sessions.length === 0 && <p className="text-center text-gray-300 p-4">No sessions available.</p>}
                        </div>
                    </div>
                </>
            )}

            {showDeletePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-xs">
                        <p className="text-gray-200 mb-4">Are you sure you want to delete this session?</p>
                        <div className="flex space-x-4 justify-center">
                            <button
                                onClick={deleteSession}
                                className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => setShowDeletePopup(false)}
                                className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SessionManager;
