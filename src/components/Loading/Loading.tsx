import Style from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={Style.loading_container}>
      <div className={Style.lds_ring}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}