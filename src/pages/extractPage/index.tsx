import { StatementComponent } from "../../components/StatementComponent/StatementComponent";
import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";

export const StatementPage = () => {
  const user = "Matheus";
  const currentBalance = Number(3.691);

  return (
    <>
      <NavBarPrincipal />
      <StatementComponent user={user} currentBalance={currentBalance} />
    </>
  );
};
