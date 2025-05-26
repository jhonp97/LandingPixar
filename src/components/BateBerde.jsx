const BateVerde = () => {
   
        return (
          <section
            style={{
                position: "relative",
                width:"68%",
                height: "270px",
              backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/9ae6d321-34af-4ef8-8b50-525eac838060/mtp_bg.jpg?format=2500w")`, // Verde Pixar
           
              display: "flex",
              flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              gap: "10px",
              
            }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/db41424e-0746-44b5-9630-bcb23c532326/ggcs_LaurieBlob_1.per16n.101.png?format=1500w"
              alt="Personaje con bate"
              style={{
                position: "absolute",
                top: "-36.5%",
                left: "35%",
               
                width: "30%",
               
              }}
            />
      
              <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/edac5088-045b-4b01-a155-7dc80f975541/MTP_Logo_TT_LtBg_v2.1.png?format=750w" alt="meet" width={350} height={250} style={{marginLeft: "120px"}}/>


            <div style={{ width: "400px", color: "#000", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", gap:"10px"}}>

              <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/38214db3-1bde-48b2-9109-99bd864da366/wol-m.png?format=500w" alt="winlose" width={250}/>
              <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "white"}}>
                NOW STREAMING
              </h2>
              <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/9c284b28-c3bc-4c6f-803a-413ad6520376/d%2B.png?format=500w" alt="logo" width={100} />
              
            </div>
          </section>
        );
      };
 
export default BateVerde;