import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import Image from "next/image";

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <div className={classes.image}>
        <Image src="/images/site/max.png" height={300} width={300} />{" "}
      </div>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
