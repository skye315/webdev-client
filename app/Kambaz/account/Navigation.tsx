import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link href="/Kambaz/account/signin">Signin</Link> <br />
      <Link href="/Kambaz/account/signup">Signup</Link> <br />
      <Link href="/Kambaz/account/profile">Profile</Link> <br />
    </div>
  );
}