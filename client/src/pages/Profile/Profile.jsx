import React, { useEffect, useRef, useState } from "react";
import { TextArea } from "../../components/TextArea";
import { TextInput } from "../../components/TextInput";
import { TextInputRef } from "../../components/TextInputRef";
import { TextAreaRef } from "../../components/TextAreaRef";
import { PrimaryButton } from "../../components/PrimaryButton";
import "./Profile.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, createProfile } from "../../actions/profile";
import { Modal } from "../../components/Modal";
import ProfileHeader from "./components/ProfileHeader";
import ProfileDetails from "./components/ProfileDetails";
import EditProfileModal from "./components/EditProfileModal";
import ProfileContent from "./components/ProfileContent";
import ProfileContainer from "./components/ProfileContainer";

function Profile(props) {
  let navigate = useNavigate();

  const { user: currentUser } = useSelector((state) => state.auth);

  const defaultProfile = {
    firstName: "First Name",
    lastName: "Last Name",
    location: "Your Location",
    contactNo: "+xx xxx xxx xxxx",
    aboutMe: "Your Bio",
    initials: "FL",
    email: currentUser.email,
  };

  const [isOpen, setOpen] = useState(false);

  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const inputRef = useRef({});

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser]);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  // Handle submit for modal form
  function handleEditProfile(e) {
    e.preventDefault();
    dispatch(
      createProfile({
        firstName: inputRef.current.inputFirstName.value,
        lastName: inputRef.current.inputLastName.value,
        location: inputRef.current.inputLocation.value,
        contactNo: inputRef.current.inputContact.value,
        aboutMe: inputRef.current.inputAbout.value,
      })
    );
    setOpen(false);
    setTimeout(() => {
      dispatch(getProfile());
    }, 1000);
  }

  if (currentUser && profile) {
    profile.email = currentUser.email;
  }
  return (
    <ProfileContainer>
      <ProfileHeader
        profile={profile ? profile : defaultProfile}
        modalToggler={() => setOpen(!isOpen)}
      />
      <ProfileContent>
        <ProfileDetails profile={profile ? profile : defaultProfile} />
        <EditProfileModal
          profile={profile ? profile : defaultProfile}
          isOpen={isOpen}
          setOpen={setOpen}
          inputRef={inputRef}
          handleEditProfile={handleEditProfile}
        />
      </ProfileContent>
    </ProfileContainer>
  );
}

export default Profile;
