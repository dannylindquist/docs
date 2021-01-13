import React, { useState } from "react";
import { Link } from "./Link";
import { Logo } from "./Logo";
import tw from "twin.macro";
import { X, Sun, Moon, Menu } from "react-feather";
import { useTheme } from "../styles/theme";
import { MobileNav } from "./Sidebar";

export interface Props {}

export const Nav: React.FC<Props> = () => {
  const { colorMode, setColorMode } = useTheme();
  const toggleColorMode = () =>
    setColorMode(colorMode === "dark" ? "light" : "dark");

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Header tw="bg-background">
        <div>
          <Logo tw="md:hidden" />
        </div>

        <div tw="flex items-center space-x-4">
          <button
            tw="md:hidden w-5 h-5 cursor-pointer focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <X width="100%" height="100%" />
            ) : (
              <Menu width="100%" height="100%" />
            )}
          </button>

          <button
            tw="w-5 h-5 cursor-pointer focus:outline-none"
            onClick={toggleColorMode}
          >
            {colorMode === "dark" ? (
              <Sun width="100%" height="100%" />
            ) : (
              <Moon width="100%" height="100%" />
            )}
          </button>
        </div>
      </Header>

      <MobileNav isOpen={isNavOpen} />
    </>
  );
};

const Header = tw.header`
  flex items-center justify-between
  px-3 py-6 text-center
  md:sticky md:top-0 md:z-10
`;