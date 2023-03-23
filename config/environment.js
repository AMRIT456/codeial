

const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'amritchattopadhyay456',
            pass: 'fwcixsqssrojzhau'
        }
    },
    google_client_id: "151318013613-ghn1fcduqqj3ktviqqcp1cvv7ll0jndu.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial',
}


const production =  {
    name: 'production'
}



module.exports = development;