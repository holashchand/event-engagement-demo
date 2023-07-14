
import {ReactElement, FC} from "react";
import { Avatar, Box, Chip, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import { useLocation } from "react-router-dom";
import ToolBar from "../layout/AppBar";
import rank from '../assets/rank.svg';
function createData(
    name: string,
    organisation: string,
    id: number,
    points: string,
  ) {
    return { name, organisation, id, points };
  }
  
  const rows = [
    createData('Jon', 'abc', 1, '442pt'),
    createData('Arya', 'xyz', 2, '453pt'),
    createData('Stark', '', 3, '433pt'),
    createData('Cupcake', '', 4, '130pt'),
  ];

const LeaderBoard: FC<any> = (): ReactElement => {

    const { state } = useLocation();
    console.log('navigate ', state);

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            <ToolBar hideBtn={false} show={false} badgeOpt={false} toolbarHeight={true}/>
            <Box sx={{position: 'absolute', left: '15%', top: '12%'}}>
                <img src={rank}/>
            </Box>
                <Avatar sx={{position: 'absolute', left: '17%', top: '12%'}}></Avatar>
                <Avatar sx={{position: 'absolute', top: '8%'}}></Avatar>
                <Avatar sx={{position: 'absolute', top: '12%', right:'18%'}}></Avatar>
                <InputLabel sx={{position: 'absolute', left: '25%', top: '30%', color:'white'}}>{rows[0].points}</InputLabel>
                <InputLabel sx={{position: 'absolute', top: '30%', color:'white'}}>{rows[1].points}</InputLabel>
                <InputLabel sx={{position: 'absolute', top: '30%', right:'25%', color:'white'}}>{rows[2].points}</InputLabel>
            <Box sx={{ my: 50, mx: 2, color:'primary.dark', width: '100%'}}>
            <TableContainer component={Paper}>
                <Table sx={{ }} aria-label="simple table">
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" sx={{borderBottom: 'none !important'}}>{row.id}</TableCell>
                        <TableCell align="center" sx={{borderBottom: 'none !important'}}><div>{row.name}</div><div>{row.organisation}</div></TableCell>
                        <TableCell align="center" sx={{borderBottom: 'none !important'}}><Chip label={row.points} sx={{backgroundColor:"#A7EAEE"}}></Chip></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default LeaderBoard;