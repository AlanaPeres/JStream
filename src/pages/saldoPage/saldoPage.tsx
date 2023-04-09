
import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";
import { SaldoContent } from "../../components/saldoComponent/saldoComponent";
import { contaService } from "../../service/contaService";

export const SaldoPage = () => {
 let user = contaService.getUserLogged('usuario');

  return (
    <> 
      <NavBarPrincipal/>
      <SaldoContent user={user.nome}/>
    </>
  );
};