import { prisma} from '../../database/database.js';

const authRepository = {
    register: async (fullName: string, email: string, password: string) => {
        return await prisma.user.create({
            data: {
                fullName,
                email,
                password
            }
        });
    },

    login: async (email: string) => {
        return await prisma.user.findUnique({
            where: {
                email
            }
        });
    },

    updateRefreshToken: async (userId: number, refreshToken: string) => {
        return await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                refreshToken
            }
        });
    },

    getUserByEmail: async (email: string) => {
        return prisma.user.findUnique({
            where: {
                email
            }
        });
    }
}

export default authRepository;