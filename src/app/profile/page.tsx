import { getServerSession } from "next-auth"
import React from "react"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { Image } from "@nextui-org/react"
import { redirect } from "next/navigation"

const ProfilePage = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user
  if (!session || !session.user) {
    redirect("/auth/signin")
  }
  return (
    <div>
      <Image
        src={user?.image ?? ""}
        alt={user?.firstname ?? ""}
        className="rounded-full"
        height={300}
        width={300}
      ></Image>
      <div className="grid grid-cols-4 gap-y-4 ">
        <p className="">First Name:</p>
        <p className="col-span-3">{user?.firstname}</p>
        <p className="">Last Name:</p>
        <p className="col-span-3">{user?.lastname}</p>
        <p className="">Phone:</p>
        <p className="col-span-3">{user?.phone}</p>
        <p className="">Email:</p>
        <p className="col-span-3">{user?.email}</p>
      </div>
    </div>
  )
}

export default ProfilePage
