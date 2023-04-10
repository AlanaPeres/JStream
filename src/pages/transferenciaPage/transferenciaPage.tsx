import { TransferenciaContent } from "../../components/transferenciaComponent/transferenciaComponent";
import { HeaderMobile } from "../../components/headerMobileComponent/headerMobileComponent";
import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";
import { contaService } from "../../service/contaService";
import { UsersManager } from "../../service/usersManagers";

export const TransferenciaPage = () => {
    const userManager = new UsersManager();
    if (!userManager.getSessionUser()) {
        const host = window.location.host;
        window.location.href = `http://${host}/login`;
  }
    let user = contaService.getUserLogged('usuario');

    return(
        <>
            <HeaderMobile user={user}/>

            <TransferenciaContent />
            
            <NavBarPrincipal />
        </>
    );
}