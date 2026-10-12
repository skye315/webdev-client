import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account">
      <div className="flex">
        <div className="shrink-0">
          <AccountNavigation />
        </div>
        <div className="flex-1">{children}</div>
        </div>
      </div>
  );
}