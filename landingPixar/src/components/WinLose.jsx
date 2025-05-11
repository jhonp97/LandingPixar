const WinLose = () => {
    const stylesDiv = {
        width: "68%",
       border: "solid 2px gray",
        backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/319ff132-f2a9-4159-89ef-1264b68b4e81/wl_home2.jpg?format=1500w")`,
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        color: "#fff"
    }

    const stylesImg = {
        marginTop: "2%",
        marginLeft: "30%",
       width: "50%",
        
    
    }

    const stylesH3 = {
        fontSize: "1.1rem",
        textAlign: "right",
        marginTop: "5px",
        marginLeft: "30%",
        padding: "5px",
        color: "black",
        letterSpacing: "5px",
    }

    const styleLogo = {
        width: "10%",
        marginTop: "25px",
        marginBottom: "25px",
        marginLeft: "30%",
        padding: "5px",
       
    }

    return ( 
        <div className="win-lose"
        style={stylesDiv}>
            <img style={stylesImg} src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/471447c0-56ae-46f2-ba47-eb8f93af3c00/wol_logo.png?format=2500w" alt="WinorLose" />
            <h3 style={stylesH3}>ALL EPISODES NOW STREAMING</h3>
            <img style={styleLogo} src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1e6a13c7-e61e-4393-9d94-d6d76805037e/d%2B.png?format=750w" alt="LOGO" />
            <img src="" alt="" />
           
        </div>
     );
}
 
export default WinLose;