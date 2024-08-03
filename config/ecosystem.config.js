const live = {
    DATABASE_HOST: "127.0.0.1",
    DATABASE_USER: "root",
    DATABASE_PASSWORD: "AquamarinePassword",
    DATABASE: "prod",
    ACCOUNT_DATABASE: "account",

    ENV_NAME: "live",

    CLOUDINARY_NAME: "(INSERT INFO HERE)",
    CLOUDINARY_API_KEY: "(INSERT INFO HERE)",
    CLOUDINARY_API_SECRET: "(INSERT INFO HERE)",

    AUTH_TOKEN_SECRET:
        "(INSERT INFO HERE)",
};

module.exports = {
    apps: [
        {
            name: "Aquamarine-Discovery",
            script: "index.js",
            cwd: "repos/Aquamarine-Discovery/",

            autorestart: true,
            restart_delay: 4000,
            watch: true,

            out_file: "../../logs/Aquamarine-Discovery/out.log",
            error_file: "../../logs/Aquamarine-Discovery/error.log",

            env: {
                ENVIRONMENT: live,
                PORT: 8080,
            },
        },

        {
            name: "Aquamarine-API",
            script: "index.js",
            cwd: "environments/live/Aquamarine-API/",

            autorestart: true,
            restart_delay: 4000,
            watch: true,

            out_file: "../logs/Aquamarine-API/out.log",
            error_file: "../logs/Aquamarine-API/error.log",

            env: {
                ENVIRONMENT: live,
                PORT: 8083,
            },
        },

        {
            name: "Aquamarine-Portal",
            script: "index.js",
            cwd: "environments/live/Aquamarine-Portal/",

            autorestart: true,
            restart_delay: 4000,
            watch: true,

            out_file: "../logs/Aquamarine-Portal/out.log",
            error_file: "../logs/Aquamarine-Portal/error.log",

            env: {
                ENVIRONMENT: live,
                PORT: 8081,
            },
        },

        {
            name: "Aquamarine-3DS",
            script: "index.js",
            cwd: "environments/live/Aquamarine-3DS/",

            autorestart: true,
            restart_delay: 4000,
            watch: true,

            out_file: "../logs/Aquamarine-3DS/out.log",
            error_file: "../logs/Aquamarine-3DS/error.log",

            env: {
                ENVIRONMENT: live,
                PORT: 8082,
            },
        },

        {
            name: "Aquamarine-Offdevice",
            script: "index.js",
            cwd: "environments/live/Aquamarine-Offdevice/",

            autorestart: true,
            restart_delay: 4000,
            watch: true,

            out_file: "../logs/Aquamarine-Offdevice/out.log",
            error_file: "../logs/Aquamarine-Offdevice/error.log",

            env: {
                ENVIRONMENT: live,
                PORT: 8084,
            },
        },

        {
            name: "Aquamarine-Admin-Panel",
            script: "index.js",
            cwd: "environments/live/Aquamarine-Admin-Panel/",

            autorestart: true,
            restart_delay: 4000,
            watch: true,

            out_file: "../logs/Aquamarine-Admin-Panel/out.log",
            error_file: "../logs/Aquamarine-Admin-Panel/error.log",

            env: {
                ENVIRONMENT: live,
                PORT: 8085,
            },
        },
    ],

    group: {
        live: [
            "Aquamarine-Discovery",
            "Aquamarine-API",
            "Aquamarine-Portal",
            "Aquamarine-Offdevice",
            "Aquamarine-3DS",
        ],
    },
};