import React from 'react';


const UserProfile: React.FC = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>User Profile</h1>
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Name:
                    <input type="text" placeholder="Enter your name" style={{ marginLeft: '10px' }} />
                </label>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Email:
                    <input type="email" placeholder="Enter your email" style={{ marginLeft: '10px' }} />
                </label>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Bio:
                    <textarea placeholder="Tell us about yourself" style={{ marginLeft: '10px', width: '100%', height: '100px' }} />
                </label>
            </div>
            <button type="submit" style={{ padding: '10px 20px' }}>Save</button>
        </div>
    );
};

export default UserProfile;