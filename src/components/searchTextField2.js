import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import api from "../configs/http-common";




function SearchTextField2() {
    const [response, setResponse] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (element) => {
        if (element.target.value !== null || element.target.value !== "") {
            setSearchTerm(element.target.value)
        }
    };

    React.useEffect(() => {

        async function fetchData() {
            const dataObject = await api.get("/auto/1/" + searchTerm);
            setResponse(dataObject.data.found.data);
        }

        fetchData();
    }, [searchTerm])

    return (
        <div>
            <Paper elevation={3}
                component="form"
                sx={{ display: 'flex', alignItems: 'center', width: '100%', border: '2px solid green' }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleChange}
                />
                <IconButton type="submit" sx={{ height: 50, p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
            {response.length > 0 ? <List className="my-list">
                {response.map((value) => (

                    <ListItem
                        className="my-list-item"
                        key={value.id}
                        disableGutters
                        secondaryAction={
                            <>
                                <IconButton>
                                    <VisibilityIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        }
                    >
                        <div>
                            <span>{value.email}</span>
                            <br />
                            {value.name}, {value.age}, {value.hospital}
                        </div>

                    </ListItem>
                ))}
            </List> :
                <ListItem
                    className="my-list-item"
                >
                    <ListItemText secondary="No results found" />
                </ListItem>
            }
            {/* <div style={{ background: "white" }}>
                <Stack spacing={2} >
                    <Pagination
                        color="primary"
                        count={10}
                        page={page} onChange={handleChange}
                    />
                </Stack>
            </div> */}
        </div>
    );
}

export default SearchTextField2;