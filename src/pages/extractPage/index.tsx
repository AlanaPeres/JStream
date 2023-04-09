import { StatementComponent } from "../../components/StatementComponent/StatementComponent";
import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";
import { contaService } from "../../service/contaService";

export const StatementPage = () => {
  let user = contaService.getUserLogged('usuario');
  return (
    <>
      <NavBarPrincipal />
      <StatementComponent user={user.nome}  />
    </>
  );
};
