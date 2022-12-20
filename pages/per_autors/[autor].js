
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


//Skeleton
import Skeleton from '@mui/material/Skeleton';


export default function News({data,error}){
  
    if (error) return <div>falha na requisição...</div>
    if (!data) return (
        <div>
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width={'100%'} height={100} />
                <Skeleton variant="rectangular" width={'100%'} height={100} />
                <Skeleton variant="rectangular" width={'100%'} height={100} />
                <Skeleton variant="rectangular" width={'100%'} height={100} />
                <Skeleton variant="rectangular" width={'100%'} height={100} />
                <Skeleton variant="rectangular" width={'100%'} height={100} />
            </Stack>
        </div>
    )


    return (
        <div>
            <h1 sx={{margin:'14px'}}>Publicações desse autor</h1>
            <Button variant="contained" size="small" href='../' sx={{margin:'14px'}}>Voltar</Button>
            {data.map((data) =>
                <div>                    
                    <Card sx={{ maxWidth: "100%", margin: "8px 2vh", display: "block"}}>
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {data.title}
                        </Typography>
                        <Typography variant="body1" color="text.secundary">
                            Autor: <Link href={`https://www.tabnews.com.br/${data.owner_username}`} underline="hover">{data.owner_username}</Link>
                        </Typography>
                        <br/>
                        <Typography variant="body5" color="text.secondary">
                            <strong>{Publi(data.title)}</strong>
                        </Typography>
                        <br/>
                        <Typography variant="body5" color="text.secondary">
                            Data de publicação: {data.updated_at.slice(0,10)}
                        </Typography>
                        <br/><br/>
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained" size="small" key={`${data.owner_username}/${data.slug}`} href={`../selectednews/${data.owner_username}__${data.slug}`}>Ver mais</Button>
                        </Stack>
                        </CardContent>
                    </Card>
                </div>
                )}                  
        </div>
    )
}

export function disabledButton(url){
if (url == null) return (<Button variant="contained" disabled>Noticia completa</Button> )
return(
  <Button variant="contained" href={url} target='_blank'>Noticia completa</Button> 
)
}

export async function getStaticPaths() {
    const paths = [
      {params: { autor: 'filipedeschamps' } },
      {params: { autor: 'ricardovm' } },
      {params: { autor: 'godri' } },
      {params: { autor: 'designliquido' } },
    ];
    return { paths, fallback: true};
  }


export async function getStaticProps({params}){
    const {autor} = params
    const res = await fetch(
      `https://www.tabnews.com.br/api/v1/contents/${autor}?per_page=10`
    );

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

export function Publi(data) {
    if(data == null) return (
        <strong>tipo: Comentário</strong>
    ) 
    return (<Typography variant="body5" color="text.secondary">
        <strong>{data}...</strong>
        </Typography>)
}