module.exports = {
    // Category
    validateCategoryCreate: (req, res, next) => {
        const { name } = req.body;
        const errors = [];
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            errors.push('name wajib (minimal 2 karakter)');
        }
        if (errors.length) return res.status(400).json({ errors });
        next();
    },

    validateCategoryUpdate: (req, rs, next) => {
        const { name } = req.body;
        const errors = [];
        if (name !== undefined && (typeof name !== 'string' || name.trim().length < 2)) {
            errors.push('Jika di Sertakan, Name Minimal 2 Karakter');
        }
        if (errors.length) return res.status(400).json({ errors });
        next();
    },

    // Movie
    validateMovieCreate : (req, res, next) => {
        const { title, year } = req.body;
        const errors = [];

        if (!title || typeof title !== 'string' || title.trim().length < 1) {
            errors.push('title wajib');
        }

        if (year !== undefined && (!Number.isInteger(year) || year < 1800 || year > 3000)) {
            errors.push('year harus integer valid dari tahun 2000 sd 2026 (opsional)');
        }

        if (errors.length) return res.status(400).json({ errors });
        next();
        },

    validateMovieUpdate : (req, res, next) => {
        const { title, year } = req.body;
        const errors = [];

        if (title !== undefined && (typeof title !== 'string' || title.trim().length < 1)) {
            errors.push('Jika disertakan, title tidak boleh kosong');
        }

        if (year !== undefined && (!Number.isInteger(year) || year < 1800 || year > 3000)) {
            errors.push('Jika disertakan, year harus integer valid');
        }

        if (errors.length) return res.status(400).json({ errors });
        next();
        }



}