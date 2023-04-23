import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";
import { SaldoContent } from "../../components/saldoComponent/saldoComponent";
import { UsersManager } from "../../service/usersManagers";

export const SaldoPage = () => {
  const userManager = new UsersManager();
  // if (!userManager.getSessionUser()) {
  //   const host = window.location.host;
  //   window.location.href = `http://${host}/login`;
  // }

  userManager.authenticateJwt();
  return (
    <> 
      <NavBarPrincipal/>
      <SaldoContent />
    </>
  );
};
