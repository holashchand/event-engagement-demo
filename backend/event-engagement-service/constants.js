
module.exports = {
    VISITOR_QR_BASE_URL: process.env.VISITOR_QR_BASE_URL || "http://localhost:8000",
    KEYCLOAK_URL: process.env.KEYCLOAK_URL || "http://localhost:8080/auth",
    SERVICE_ACCOUNT_CLIENT_SECRET: "36e514de-5fd8-48e8-886c-e491ffa302f3",
    registryUrl: process.env.REGISTRY_URL || "http://localhost:8081",
    credentialUrl: process.env.CREDENTIAL_URL || "http://localhost:3000",
    identityUrl: process.env.IDENTITY_URL || "http://localhost:3332",
    credentialSchemaUrl: process.env.CREDENTIAL_SCHEMA_URL || "http://localhost:3333"
}