
import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";
import { SaldoContent } from "../../components/saldoComponent/saldoComponent";


export const SaldoPage = () => {
  const user = "matheus";
  const saldoAtual = 500.0;

  return (
    <> 
      <NavBarPrincipal/>
      <SaldoContent user={user} saldoAtual={saldoAtual} />
    </>
  );
};