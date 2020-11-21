package tk.resentful

import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.http.*
import com.fasterxml.jackson.databind.*
import io.ktor.jackson.*
import io.ktor.features.*
import io.ktor.client.*
import io.ktor.client.engine.apache.*
import tk.resentful.configs.DatabaseConfig
import tk.resentful.controller.DataAccessObject

fun main(args: Array<String>): Unit = io.ktor.server.tomcat.EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {
    val dataAccessObject = DataAccessObject()
    if (!testing) {
        DatabaseConfig.initDB()
    }

    install(ContentNegotiation) {
        jackson {
            enable(SerializationFeature.INDENT_OUTPUT)
        }
    }

    val client = HttpClient(Apache) {
    }

    routing {
        route("api") {
            get("/") {
                call.respondText("HELLO WORLD!", contentType = ContentType.Text.Plain)
            }

            get("/json/jackson") {
                call.respond(mapOf("hello" to "world"))
            }
        }
        route("api/donators") {
            get("/{note}") {
                val note = call.parameters["note"]!!
                call.respond(dataAccessObject.getAllFromNote(note))
            }
            get("/") {
                call.respond(dataAccessObject.getAll())
            }
        }
    }
}

