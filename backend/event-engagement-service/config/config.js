
module.exports = {
    VISITOR_QR_BASE_URL: process.env.VISITOR_QR_BASE_URL || "http://localhost:8000",
    KEYCLOAK_REALM: process.env.KEYCLOAK_REALM || "sunbird-rc",
    KEYCLOAK_URL: process.env.KEYCLOAK_URL || "http://localhost:8080/auth",
    REGISTRY_URL: process.env.REGISTRY_URL || "http://localhost:8081",
    CREDENTIAL_URL: process.env.CREDENTIAL_URL || "http://localhost:3000",
    IDENTITY_URL: process.env.IDENTITY_URL || "http://localhost:3332",
    CREDENTIAL_SCHEMA_URL: process.env.CREDENTIAL_SCHEMA_URL || "http://localhost:3333",
    BADGE_WIN_MIN_SCORE: process.env.BADGE_WIN_MIN_SCORE || 4,
    NO_OF_QUESTIONS: process.env.NO_OF_QUESTIONS || 5,
}