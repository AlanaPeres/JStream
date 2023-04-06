import { ExtractComponent } from "../../components/extractComponent/extractComponent";
import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";

export const ExtractPage = () => {
  const user = "Fulano";
  const saldoAtual = Number(3.691);

  return (
    <>
      <NavBarPrincipal />
      <ExtractComponent user={user} saldoAtual={saldoAtual} />
    </>
  );
};
