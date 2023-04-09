import { TransferenciaContent } from "../../components/transferenciaComponent/transferenciaComponent";
import style from './transferenciaPage.module.css';
import { HeaderMobile } from "../../components/headerMobileComponent/headerMobileComponent";
import { NavBarPrincipal } from "../../components/navBarPrincipalComponent/navBarPrincipalComponent";
import { contaService } from "../../service/contaService";



export const TransferenciaPage = () => {
    let user = contaService.getUserLogged('usuario');

    return(
        <>
            <HeaderMobile user={user.nome}/>

            <TransferenciaContent />
            
            <NavBarPrincipal />
        </>
    );
}