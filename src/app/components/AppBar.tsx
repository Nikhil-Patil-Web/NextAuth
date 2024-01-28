import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"
import React from "react"
import SignInButton from "./SignInButton"
import Link from "next/link"

function AppBar() {
  return (
    <Navbar isBordered>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SignInButton></SignInButton>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default AppBar
