interface Props{
    children: React.ReactNode;
  }

export const EstruturaModal = ({children} : Props)=>{
    return(
        <div className="modal-root"> 
            {children} 
        </div>
    );
}