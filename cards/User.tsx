'use client'
import Image from "@/components/Image";
import Language from "@/locales/Language";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { getProfile } from "@/models/AuthModel";
import UserType from "@/types/User";

const User = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserType | null>(null); 

  const get = async () => {
    setLoading(true);
    const dbUser = await getProfile();
    if (dbUser !== null) {
      setUser(dbUser);
    }
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      {loading && (
        <div>
          <Loader />
        </div>
      )}
      {user && (
        <div className={"flex gap-2 items-center mb-4 pb-4 border-b border-slate-700"}>
          <div className={"w-16 h-16 rounded-full overflow-hidden"}>
            <Image
              src={`${user.avatar ? process.env.NEXT_PUBLIC_UPLOAD_URL + "/" + user.avatar : "/assets/images/image-placeholder.svg"}`}
              alt={"user"}
              type={"cover"}
            />
          </div>
          <div>
            <div>
              {user.name && (
                <span>
                  <span>{user.name}</span>
                  <a href={"/management/profile"} className={"far fa-pen text-violet-400 ps-2"}></a>
                </span>
              )}
              {!user.name && (
                <span className={"text-slate-300 italic text-sm"}>
                  {Language().please_enter_your_name}
                  <a href={"/management/profile"} className={"far fa-pen text-violet-400"}></a>
                </span>
              )}
            </div>
            <div className={"text-xs text-teal-600"}>{user.username}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
