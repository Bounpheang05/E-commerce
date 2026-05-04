// import { useState } from "react";
// import Avatar from "../../components/user/Avatar";
// import ProfileTabs from "../../components/user/ProfileTabs";
// import ProfileForm from "../../components/user/ProfileForm";
// import OrderList from "../../components/user/OrderList";

// const Profile = () => {
//   const [tab, setTab] = useState("profile");

//   const user = {
//     name: "John Doe",
//     email: "john@email.com",
//     avatar: "",
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4">

//       {/* Header */}
//       <div className="flex items-center gap-4">
//         <Avatar name={user.name} size="lg" />
//         <div>
//           <h2 className="text-xl font-bold">{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <ProfileTabs tab={tab} setTab={setTab} />

//       {/* Content */}
//       <div className="mt-6">
//         {tab === "profile" && <ProfileForm user={user} />}
//         {tab === "orders" && <OrderList />}
//       </div>
//     </div>
//   );
// };

// export default Profile;