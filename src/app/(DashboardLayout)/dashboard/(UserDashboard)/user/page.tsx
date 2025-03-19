"use client";

const ProfilePage = () => {
  // const { user } = useUser();

  return (
    <div className="h-[calc(100vh-64px)] bg-cover bg-center bg-slate-700 p-8">
      <div className="container mx-auto pt-12   text-stone-100 font-semibold text-3xl space-y-4 text-center  justify-center items-center ">
        <h2>Welcome user?.name</h2>
        <p>Your email is:user?.email </p>
        <p> user?.phone </p>
        <h3>Thank so much for using our site.</h3>
      </div>
    </div>
  );
};

export default ProfilePage;
