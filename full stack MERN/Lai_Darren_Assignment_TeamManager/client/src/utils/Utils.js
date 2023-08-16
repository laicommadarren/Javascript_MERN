import axios from "axios";
import { useState, useEffect } from "react";



// export  useEffect(() => {
//     axios.get('http://localhost:8000/api/players')
//     .then(res => {
//         const currentList = res.data.sort((a, b) => a.name.localeCompare(b.name)); // alphabetizing
//         setPlayers(currentList); 
//     })
// }, [players])