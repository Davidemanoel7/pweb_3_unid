export default function Musics({data, pesquisa}){
    console.log(data)
    return (    
        <div>  
            <form method="GET" style={{marginBottom: "20px"}}>
                <input type="text" name="pesquisa" placeholder="Procurar música:" defaultValue={pesquisa}></input>
                <input type="submit" value="&#128269;"></input>
            </form>

            <div>  
                {data.articles?.map((m) => <div style={{marginBottom:"30px"}}> TItulo da noticia: {m.title} | Autor do artigo: {m.author}<br></br> <img src={m.urlToImage}></img><br></br> {m.description} <a href={m.url}> Notícia completa</a></div>)}                   
            </div>    
        </div>    
    )    
}

//<img src={m.Poster}></img>

export async function getServerSideProps(context){
    
    const {pesquisa} = context.query;
    const res = await fetch(`https://newsapi.org/v2/everything?q=${pesquisa}&sortBy=publishedAt&apiKey=82912a10c2e143659df8b64699cb5d39`)
  
    const data = await res.json()  
        return {
            props: {  
                data
            }
        }  
}


//api : https://api.vagalume.com.br/search.mus?apikey=62cd865060c7451036501ec5b9f85d90&q=love&limit=10