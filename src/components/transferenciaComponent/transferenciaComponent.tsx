import style from './transferenciaComponent.module.css'

export const TransferenciaForm = () =>{
    return(
        <div className={style.container}>
            <h3 className={style.title_desktop}>Transferência</h3>
            
            <div className={style.content}>
                
                <h3 className={style.title_mobile}>Transferência</h3>
            
                <div className={style.form_container}>
                    <form className={style.form}>
                        <div className={style.container_input_label}>
                            <input type="text" pattern="[A-Za-z]+" autoComplete="off" required/>
                            <label>Tipo de conta</label>
                        </div>
                        
                        <div className={style.container_input_label}>
                            <input type="number" pattern="[0-9]{3}" minLength={3} maxLength={3} autoComplete="off" required/>
                            <label>Cod do banco</label>
                        </div>
                        
                        <div className={style.container_input_label}>
                            <input pattern="[0-9]" autoComplete="off" required/>
                            <label>Agência</label>
                        </div>
                        
                        <div className={style.container_input_label}>
                            <input pattern="[0-9]" autoComplete="off" required/>
                            <label>Nº conta</label>
                        </div>
                        
                        <div className={style.container_input_label}>
                            <input pattern="[0-9.,]+" autoComplete="off" required/>
                            <label>Valor</label>
                        </div>
                        
                        <button className={style.btn} type="submit">Próximo</button>
                    </form>
                </div>
            </div>  
        </div>
    )
}