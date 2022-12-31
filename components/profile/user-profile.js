import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import Image from "next/image";
import { getSession } from "next-auth/client";
import { useState } from "react";
// import { useEffect, useState } from "react";
// import { getSession, session } from "next-auth/client";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href("/auth");
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading</p>;
  // }
  const [isLoading, setIsLoading] = useState(true);
  async function changePasswordHandler(enteredPasswords) {
    const result = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(enteredPasswords),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();
    console.log(data);
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <div className={classes.image}>
        <Image src="/images/site/max.png" height={300} width={300} />{" "}
      </div>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
