import useSWR from 'swr'
import {useRouter} from 'next/router'

export default function News(){
    const router = useRouter();
    const {owner_username, slug} = router.query;
    console.log(owner_username)
    console.log(slug)

    const {data, error} = useSWR(`https://www.tabnews.com.br/api/v1/contents/${owner_username}/${slug}
    `,  fetcher); 

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            <div>
                <strong>Título da noticia: {data.title}</strong> <br/> Prelúdio: {data.body} <br/> Autor do artigo: {data.owner_username}<br/>
                <p>{data.tabcoins}  Updated in {data.updated_at}</p>
                <p></p>
                <a href={data.source_url} target="_blank"> Noticia completa</a>
            </div>
            <a href='../'>Página inicial</a>
        </div>
    )    
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}