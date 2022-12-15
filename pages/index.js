export default function News({data,pesquisa}){
    //console.log(data)
    return (    
        <div>  
            <form method="GET" style={{marginBottom: "20px"}}>
                <input type="text" name="pesquisa" placeholder="Procurar música:" defaultValue={pesquisa}></input>
                <input type="submit" value="&#128269;"></input>
            </form>
            <div>  
                {data.map((m) => <div style={{marginBottom:"30px"}}> <strong>Título da noticia: {m.title}</strong> | Autor do artigo: {m.owner_username}<br></br> <a href={m.source_url} target="_blank"> Noticia completa</a>
                </div>)}                 
            </div>   
        </div>    
    )    
}

//<img src={m.Poster}></img>

export async function getServerSideProps(context){
    const {pesquisa} = context.query;
    const res = await fetch(`https://www.tabnews.com.br/api/v1/contents`)
  
    const data = await res.json()  
        return {
            props: {  
                data
            }
        }  
}
