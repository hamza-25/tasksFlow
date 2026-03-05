import { Router } from "express";

const authRouter = Router();

authRouter.post('/login', (req, res) => {
    return res.json({message: 'Login successful'});
});

authRouter.post('/register', (req, res) => {
    return res.json({message: 'Registration successful'});
});