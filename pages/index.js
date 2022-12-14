export default function Musics({data, pesquisa}){
    return (    
        <div>  
            <form method="GET" style={{marginBottom: "20px"}}>
                <input type="text" name="pesquisa" placeholder="Procurar música:" defaultValue={pesquisa}></input>
                <input type="submit" value="&#128269;"></input>
            </form>

            <div>  
                {data.response.docs.map((m) => <div style={{marginBottom:"30px"}}> Nome da música: {m.title} | Artista/Banda: {m.band}</div>)}                   
            </div>    
        </div>    
    )    
}

//<img src={m.Poster}></img>

export async function getServerSideProps(context){

    const {pesquisa} = context.query;
    const res = await fetch(`https://api.vagalume.com.br/search.mus?apikey=62cd865060c7451036501ec5b9f85d90&q=` + pesquisa)
  
    const data = await res.json()  
        return {
            props: {  
                data
            }
        }  
}


//api : https://api.vagalume.com.br/search.mus?apikey=62cd865060c7451036501ec5b9f85d90&q=love&limit=10