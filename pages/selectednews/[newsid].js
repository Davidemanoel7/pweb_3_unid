import useSWR from 'swr'
import {useRouter} from 'next/router'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiMarkdown from 'mui-markdown';


//Skeleton
import Skeleton from '@mui/material/Skeleton';


export default function News({data,error}){
  
  if (error) return <div>falha na requisição...</div>
  if (!data) return (
      <div>
          <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: '2.5rem', height:"120" }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

              <Skeleton variant="rectangular" width={'100%'} height={100} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="rectangular" width={'100%'} height={100} />
              <Skeleton variant="rectangular" width={'100%'} height={100} />
              <Skeleton variant="rectangular" width={'100%'} height={100} />
          </Stack>
      </div>
    )


  return (
      <div>

          <div>
              <Card sx={{ maxWidth: "100%", margin: "8px 2vh", display: "block"}}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                      {data.title}
                  </Typography>

                  <Typography variant="body1" color="text.secundary">
                    Autor: <Link href={`https://www.tabnews.com.br/${data.owner_username}`} target="_blank" underline="hover">{data.owner_username}</Link>
                    <br/>
                    <Link href="#" underline="hover">Ver mais desse autor</Link>
                  </Typography>
                  
                  <Typography variant="body1" color="text.secondary">
                      <strong>Prelúdio:</strong> <MuiMarkdown>{data.body}</MuiMarkdown>
                  </Typography>
                  <br/>
                  <Typography variant="body5" color="text.secondary">
                      <strong>Data de publicação:</strong> {data.updated_at}
                  </Typography> 
                  <br/><br/>
                  <Stack direction="row" spacing={1}>
                    {disabledButton(data.source_url)}
                    <Button variant="contained" href='../'>Página inicial</Button>
                  </Stack>
                </CardContent>
                              
              </Card>
                      
          </div>

      </div>
  )
}

export function disabledButton(url){
if (url == null) return (<Button variant="contained" disabled>Noticia completa</Button> )
return(
  <Button variant="contained" href={url} target='_blank'>Noticia completa</Button> 
)
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}


export async function getStaticPaths() {
    const paths = [
      {params: { newsid: 'filipedeschamps__riffusion-usando-o-stable-diffusion-para-gerar-musica-atraves-de-espectrogramas' } },
      {params: { newsid: 'ricardovm__quando-o-chatgpt-me-ofereceu-uma-solucao-completamente-errada' } },
      {params: { newsid: 'godri__aquele-sobre-teoria-dos-jogos-coringa-e-inteligencia-artificial' } },
      {params: { newsid: 'designliquido__video-resolvendo-desafio-do-site-os-programadores-com-linguagem-de-programacao-100-por-cento-em-portugues-exercicio-4-xadrez' } },
    ];
    return { paths, fallback: true};
  }


export async function getStaticProps({params}) {  
    const {newsid} = params;
    let [owner_username, slug] = newsid.split("__")
    const res = await fetch(
      `https://www.tabnews.com.br/api/v1/contents/${owner_username}/${slug}`
    );
   
    
    //console.log(`https://www.tabnews.com.br/api/v1/contents/${owner_username}/${slug}`)

    try{
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