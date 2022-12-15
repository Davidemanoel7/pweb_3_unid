import useSWR from 'swr'

import {useRouter} from 'next/router'

export default function Movies(){
    const router = useRouter();
    const {imdbID} = router.query;

    const {data, error} = useSWR(`https://www.tabnews.com.br/api/v1/${imdbID}?page=1&per_page=10&strategy=new`, fetcher); 

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
            <a href='quest1/'>Página inicial</a>
        </div>
    )    
}



async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}