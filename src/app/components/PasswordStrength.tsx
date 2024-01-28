import { passwordStrength } from "check-password-strength"
import { cn } from "clsx-tailwind-merge"
import React from "react"

interface Props {
  passStrength: number
}

function PasswordStrength({ passStrength }: Props) {
  return (
    <div className="col-span-2 flex gap-2 ">
      {Array.from({ length: passStrength + 1 }).map((i, index) => (
        <div
          key={index}
          className={cn("h-2 w-32 rounded-md", {
            "bg-red-500": passStrength === 0,
            "bg-orange-500": passStrength === 1,
            "bg-yellow-500": passStrength === 2,
            "bg-green-500": passStrength == 3,
          })}
        ></div>
      ))}
    </div>
  )
}

export default PasswordStrength
