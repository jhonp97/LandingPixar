const BateVerde = () => {
   
        return (
          <section
            style={{
                position: "relative",
                width:"68%",
                height: "270px",
              backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/9ae6d321-34af-4ef8-8b50-525eac838060/mtp_bg.jpg?format=2500w")`, // Verde Pixar
              padding: "60px 20px",
              display: "flex",
              flexDirection: "row",
                justifyContent: "space-between",
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
      
            <div style={{ width: "400px", color: "#000" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                NOW STREAMING
              </h2>
              <p style={{ fontSize: "1rem" }}>
                Meet Ember and Wade in Pixar’s new film about opposites reacting.
              </p>
            </div>
          </section>
        );
      };
 
export default BateVerde;