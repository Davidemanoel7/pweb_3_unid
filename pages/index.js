import useSWR from 'swr'

export default function News(){
    //console.log(data)

    const {data, error, pesquisa} = useSWR(`https://www.tabnews.com.br/api/v1/contents`, fetcher)

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (    
        <div>  

            <form method="GET" style={{marginBottom: "20px"}}>
                <input type="text" name="pesquisa" placeholder="Procurar noticia:" defaultValue={pesquisa}></input>
                <input type="submit" value="&#128269;"></input>
            </form>

            <div>  
            { data.map((m) => <div><a key={`${m.owner_username}/${m.slug}`} href={`${m.owner_username}/${m.slug}`}>{m.title}</a></div>)}                
            </div> 

        </div>    
    )    
}

//<img src={m.Poster}></img>


async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}


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
