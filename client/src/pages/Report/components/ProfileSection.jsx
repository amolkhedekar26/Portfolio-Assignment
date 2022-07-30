import React from "react";
import { TextArea } from "../../../components/TextArea";

export default function ProfileSection({ profile }) {
  return (
    <>
      <header className="profile-header">
        <div className="info-left">
          <span className="avatar">JR</span>
          <h3 className="profile-name-location">
            <span className="profile-name">
              {profile.firstName} {profile.lastName}
            </span>
            <span className="profile-location">{profile.location}</span>
            <div className="profile-email-contact-div">
              <span className="profile-email">{profile.email}</span>
              <span className="profile-contact">{profile.contactNo}</span>
            </div>
          </h3>
        </div>
      </header>
      <div className="profile-about-div">
        <TextArea name="inputAbout" label="About Me" value={profile.aboutMe} />
      </div>
    </>
  );
}
