import useSWR from 'swr'
import {useRouter} from 'next/router'

export default function News(){
    const router = useRouter();
    const parametro = router.query;

    const {data, error} = useSWR(`https://www.tabnews.com.br/api/v1/contents/${parametro.owner_username}/${parametro.slug}
    `,  fetcher); 

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            <div>
                <strong>Título da noticia: {m.title}</strong> Autor do artigo: {m.owner_username}<br></br>
                <p>{data.tabcoins}  Updated in {data.updated_at}</p>
                <p></p>
                <a href={m.source_url} target="_blank"> Noticia completa</a>
            </div>
            <a href='index/'>Página inicial</a>
        </div>
    )    
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}