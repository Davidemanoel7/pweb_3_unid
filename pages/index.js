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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';

export default function Home({d}){
    const {data, error} = useSWR(`https://www.tabnews.com.br/api/v1/contents`, fetcher)
    const [selected, setSelected] = useState("demo-simple-select");
    
    async function newLink(d){
        const {data, error} =  useSWR(`https://www.tabnews.com.br/api/v1contents?&per_page=30&strategy=${d}`, fetcher)
        const resJson = await res.json()
        return resJson
    }


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
                <TextField type="text" label="Pesquise por autor" variant="outlined"/>
                <Button><input type="submit" value="&#128269;"></input></Button>
                <Box sx={{ minWidth: 200 }}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Filtrar por</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selected}
                            label="Age"
                            onChange={(e) => setSelected(e.target.value)}
                        >
                            <MenuItem value='new' key='new'>new</MenuItem>
                            <MenuItem value='relevant' key='relevant'>relevant</MenuItem>
                            <MenuItem value='old' key='old'>old</MenuItem>                            
                        </Select>
                        <Button type="submit">
                            Submit
                        </Button>
                        <Typography variant="body1" color="text.primary">teste: {selected}</Typography>
                        
                    </FormControl>
                </Box>
            </form>

            {(data.map((m) => 
                        <Stack spacing="10px">
                            <Card sx={{ maxWidth: "100%", margin: "8px 2vh", display: "block"}}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {m.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.primary">{m.owner_username}</Typography>
                                        <Typography variant="body2" color="text.secondary">{m.title}...</Typography>
                                        <Typography variant="body2" color="text.secondary">{m.published_at}</Typography>
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
