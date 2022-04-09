import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [login, setLogin] = useState(false);

    const [openmodal, setOpenmodal] = useState(false);
    const handleOpenModal = () => setOpenmodal(true);
    const handleCloseModal = () => setOpenmodal(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const setname = (e) => {
        setUsername(e.target.value);
        console.log(username);
    };

    const setpass = (e) => {
        setPassword(e.target.value);
        console.log(password);
    };

    const submitLogin = (e) => {
        e.preventDefault();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        backgroundColor: "white",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div className="navbar">
            <div className="navbar_heading">Blog App</div>
            <div className="navbar_options">
                {login ? (
                    <img
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                        src="https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo"
                        alt="thumbnail"
                    />
                ) : (
                    <button onClick={handleOpenModal}>login</button>
                )}
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
            >
                <div className="thumbnail_options">
                    <div className="profile">
                        <img
                            src="https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo"
                            alt="thumbnail"
                        />
                        <p>User Name</p>
                    </div>
                    <div className="logout_option">logout</div>
                </div>
            </Popover>
            <Modal
                open={openmodal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form>
                        <input
                            type="text"
                            name="username"
                            onChange={setname}
                            placeholder="username"
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={setpass}
                            placeholder="password"
                        />
                        <button onClick={submitLogin}>submit</button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default Navbar;
