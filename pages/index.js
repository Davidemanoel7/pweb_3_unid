import useSWR from 'swr'
import {useState} from 'react'


import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
//Skeleton
import Skeleton from '@mui/material/Skeleton';

//modal
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function Home(){
    const {data, error, pesquisa} = useSWR(`https://www.tabnews.com.br/api/v1/contents`, fetcher)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    if (error) return <div>falha na requisição...</div>
    if (!data) return(
        <div>
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width={'100%'} height={80} />
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
            
            <form method="GET" style={{marginBottom: "20px"}}>
                <TextField type="text" label="Pesquise por autor" variant="outlined" defaultValue={pesquisa}/>
                <Button><input type="submit" value="&#128269;"></input></Button>
            </form>

            {(data.map((m) => 
                        <Stack spacing="10px">
                            <Card onClick={handleOpen} sx={{ maxWidth: "100%", margin: "8px 2vh", display: "block"}}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {m.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.primary">{m.owner_username}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {m.title}...
                                        </Typography>
                                        <br/>
                                        <Button variant="contained" size="small" key={`${m.owner_username}/${m.slug}`} href={`/selectednews/${m.owner_username}__${m.slug}`}>Ver mais</Button>
                                        
                                    </CardContent>
                            </Card>
                        </Stack>))
                }
        </div> 
    )
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
} 