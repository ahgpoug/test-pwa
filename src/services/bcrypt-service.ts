import bcrypt from "bcryptjs";

class BCryptService {

    getHash(text: string): string {
        const salt = bcrypt.genSaltSync(10).replace(/\$2[a-zA-Z]\$/, '$2y$');
        return bcrypt.hashSync(text, salt);
    }
}

export const bcryptService = new BCryptService();