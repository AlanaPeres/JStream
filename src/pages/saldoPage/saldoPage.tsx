import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";
import { SaldoContent } from "../../components/saldoComponent/saldoComponent";

export const SaldoPage = () => {
  const user = "Matheus";
  const currentBalance = 500.0;

  return (
    <>
      <NavBarPrincipal />
      <SaldoContent user={user} currentBalance={currentBalance} />
    </>
  );
};
