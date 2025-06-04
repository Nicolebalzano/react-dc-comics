const AppCard = ({ title, series, thumb}) => {
    return ( <div className="col-2">
                            <div className="thumb"><img src={thumb} alt={title} /></div>
                            <div className="card-title">{series}</div>
                        </div> )
}
export default AppCard;