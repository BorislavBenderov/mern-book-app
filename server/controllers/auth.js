import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const register = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        const user = await User.findOne({ email });

        if (user) return res.status(400).json({ message: 'User already exists!' });

        if (password !== confirmPassword) return res.status(400).json({ message: 'Your password and confirmation password do not match!' })

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const result = await User.create({ email, password: hash });

        const token = jwt.sign(
            { id: result._id, email: result.email },
            process.env.JWT
        );

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: 'User not found!' });

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials!' });

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT
        );

        res.status(200).json({ result: user, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};