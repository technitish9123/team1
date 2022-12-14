import React from "react";
import ConnectedModal from "../pages/api/components/ConnectedModal";
import NotConnectedModal from "../pages/api/components/NotConnectedModal";
// import Connect from "./api/components/Connect";
import { Box, Image, Flex, Button, HStack, chakra } from "@chakra-ui/react";
import { useMetamask } from "../pages/api/components/context/metamsk.context";

const Navbar = () => {
  const {
    isWalletConnected,
    walletAddress,
    chain,
    currentWallet,
    connectMetamask,
  } = useMetamask();

  return (
    <nav className="mt-24 bg-gradient-to-tr from-emerald-200 via-white to-pink-100">
      <div class="menu">
        <input type="checkbox" id="check" />
        <div class="logo">
          <a href="#">BlocuSign</a>
        </div>
        <ul>
          <label className="btn cancel" >
            <i className="fas fa-times"></i>
          </label>

          <li>
            {isWalletConnected && walletAddress && chain && currentWallet ? (
              <>
                <ConnectedModal />
              </>
            ) : (
              <NotConnectedModal />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
