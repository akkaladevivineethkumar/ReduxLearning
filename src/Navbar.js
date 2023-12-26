// Navbar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeName} from './redux/slices/user'
import { useState } from 'react';

const Navbar = () => {
    const [name, setName] = useState('');
    const { userName } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    return (
        <>
        <nav style={{ display: "flex", alignItems: "center", justifyContent:'space-between', backgroundColor: '#333', padding: '10px' }}>
            <a href="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
                Home
            </a>
            <p style={{ color: 'white'}}>Todos Application</p>
            <div>
            <p style={{ color: 'white'}}>{`Username: ${userName}`}</p>
            <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ outline: "none", width: '50%', padding: '8px' }}
            />
            <button onClick={() => {
                if(name !== ""){
                    dispatch(changeName(name));
                    setName("");
                }
                else{
                    alert("Enter Username")
                }
                
        }} style={{ outline: "none",marginLeft: '10px', padding: '8px'}}>
                Add
            </button>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
