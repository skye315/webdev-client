
import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
import { AccountProvider } from "./AccountContext";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <AccountProvider>
      <div id="wd-kambaz-account">
        <div className="flex">
          <div className="shrink-0">
            <AccountNavigation />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </AccountProvider>
  );
}
