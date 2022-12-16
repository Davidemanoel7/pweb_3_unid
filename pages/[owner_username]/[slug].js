import useSWR from 'swr'
import {useRouter} from 'next/router'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function News(){
    const router = useRouter();
    const {owner_username, slug} = router.query;

    const {data, error} = useSWR(`https://www.tabnews.com.br/api/v1/contents/${owner_username}/${slug}`
    ,  fetcher); 

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>

            <div>
                <Card sx={{ maxWidth: "90%", margin: "8px 2vh", display: "block"}}>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                       Titulo da noticia: {data.title}<br/>
                                    </Typography>
                                    <Typography variant="body1" color="text.secundary"><strong>Escrita por:</strong> {data.owner_username}</Typography><br/>
                                    <Typography variant="body1" color="text.secondary">
                                        <strong>Prelúdio:</strong> {data.body}
                                    </Typography><br/>
                                    <Typography variant="body5" color="text.secondary">
                                        <strong>Data de publicação:</strong> {data.updated_at}
                                    </Typography>
                                </CardContent>
                                <Button variant="contained" href={data.source_url} target='_blank'>Noticia completa</Button> <Button variant="contained" href='../'>Página inicial</Button>
                        </Card>
                        
            </div>

        </div>
    )
}


async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export async function getStaticPaths() {
    const paths = [
      {params: { owner_username: 'filipedeschamps', slug: 'riffusion-usando-o-stable-diffusion-para-gerar-musica-atraves-de-espectrogramas' } },
      {params: { owner_username: 'ricardovm', slug: 'quando-o-chatgpt-me-ofereceu-uma-solucao-completamente-errada' } },
      {params: { owner_username: 'godri', slug: 'aquele-sobre-teoria-dos-jogos-coringa-e-inteligencia-artificial' } },
      {params: { owner_username: 'designliquido', slug: 'video-resolvendo-desafio-do-site-os-programadores-com-linguagem-de-programacao-100-por-cento-em-portugues-exercicio-4-xadrez' } },
    ];
    return { paths, fallback: false };
  }


export async function getStaticProps({params}) {
    const {owner_username, slug} = params;
    const res = await fetch(
      `https://www.tabnews.com.br/api/v1/contents/${owner_username}/${slug}`
    );

    try {
        const data = await res.json();
        return {
          props: {
            data,
            error: data.error ? true : false,
          },
        };
      } catch (err) {
        return {
          props: {
            data: undefined,
            error: true,
          },
        };
    }
}


