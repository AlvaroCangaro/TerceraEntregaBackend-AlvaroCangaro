const database = require('../databaseSqlite.js')

const createTableInsertChat = async () => {
    try {
        await database.schema.dropTableIfExists('chat')

        await database.schema.createTable('chat', table => {
            table.increments('id').primary()
            table.string('userEmail', 100).notNullable()
            table.string('message', 500). notNullable()
        })

        console.log("Chat talbe created")

        const chats = [
            {
                "userEmail": "prueba@hotmail.com [28/6/2022 23:38:12]",
                "message": "Aloha!"
            },
            {
                "userEmail": "prueba2@hotmail.com [28/6/2022 23:38:12]",
                "message": "Aloha par avos bro!"
            },
            {
                "userEmail": "prueba@hotmail.com [28/6/2022 23:37:00]",
                "message": "holiss!"
            },
            {
                "userEmail": "prueba3@asd.com [28/6/2022 23:39:30]",
                "message": "Buenas noches a todos!"
            },
            {
                "userEmail": "prueba4@123.com [28/6/2022 23:39:31]",
                "message": "Byes!"
            }
        ]

        await database('chat').insert(chats)

        console.log("History chat added!")

        database.destroy()

    } catch (error) {
        console.log(error)
    }
}

createTableInsertChat()