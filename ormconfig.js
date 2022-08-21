module.exports = {
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "entities": [
        "src/modules/**/infra/typeorm/entities/*.ts"
    ],
    "migrationsTableName": "migration_type_orm",
    "migrations": [
        "./src/shared/infra/typeorm/migrations/*.ts"
    ],
    "seeds": [
        "./src/shared/infra/typeorm/seeds/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
}