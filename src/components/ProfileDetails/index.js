import React from "react"

import "./ProfileDetails.css"

function ProfileDetails({ profile }){
    return (
        <div >
            <ul className="detailsContainer">
                <li key={profile.name}><strong>Name:</strong> {profile.name}</li>
                <li key={profile.age}><strong>Age:</strong> {profile.age}</li>
                <li key={profile.phone}><strong>Phone:</strong> {profile.phone}</li>
                <li key={profile.email}><strong>Email:</strong> {profile.email}</li>
                <li key={profile.address}><strong>Address:</strong> {profile.address}</li>
                <li key={profile.freelance}><strong>Freelance:</strong> {profile.freelance}</li>
                <li key={profile.github}><strong>Github:</strong> {profile.github}</li>
            </ul>
        </div>
    )
}

export { ProfileDetails }
