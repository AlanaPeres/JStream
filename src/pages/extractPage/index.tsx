import { StatementComponent } from "../../components/StatementComponent/StatementComponent";
import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";
import { UsersManager } from "../../service/usersManagers";

export const StatementPage = () => {
  const userManager = new UsersManager();
  let user = userManager.getSessionUser()
  if (!user) {
    const host = window.location.host;
    window.location.href = `http://${host}/login`;
  }
  return (
    <>
      <NavBarPrincipal />
      <StatementComponent user={user}  />
    </>
  );
};
