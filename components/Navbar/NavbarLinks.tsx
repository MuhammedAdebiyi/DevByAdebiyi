import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger
} from "@/components/ui/menubar";
export default function NavbarLinks() {
  return (
    <Menubar>
      <MenubarMenu>
      <MenubarMenu>
  <MenubarTrigger>Solutions</MenubarTrigger>
  <MenubarContent>
    <MenubarItem asChild>
      <Link href="/solutions/websites-landings">Websites & Landings</Link>
    </MenubarItem>
    <MenubarItem asChild>
      <Link href="/solutions/product-design">Product Design</Link>
    </MenubarItem>
    <MenubarItem asChild>
      <Link href="/solutions/custom-software">Custom Software</Link>
    </MenubarItem>
    <MenubarItem asChild>
      <Link href="/solutions/process-automation">Process Automation</Link>
    </MenubarItem>
    <MenubarItem asChild>
      <Link href="/solutions/web-apps">Web Apps</Link>
    </MenubarItem>
    <MenubarItem asChild>
      <Link href="/solutions/it-consulting">IT Consulting</Link>
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>
      </MenubarMenu>
      {/* Blog */}
      <MenubarMenu>
  <MenubarTrigger>Blog</MenubarTrigger>
  <MenubarContent>
    <MenubarItem asChild>
      <Link href="/blog">All Posts</Link>
    </MenubarItem>
    <MenubarItem asChild>
      <Link href="/blog/latest">Latest</Link>
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>

      {/* Contact */}
      {/* TODO: Add link to mail and socials */}
      <MenubarMenu>
        <MenubarMenu>
  <MenubarTrigger>Contact</MenubarTrigger>
  <MenubarContent>
    <MenubarItem asChild>
      <Link href="/contact">Contact Us</Link>
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>
    </MenubarMenu>
    </Menubar>
  );
}
