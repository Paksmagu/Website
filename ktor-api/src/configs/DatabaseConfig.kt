package tk.resentful.configs

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import org.jetbrains.exposed.sql.Database
import tk.resentful.helpers.SecureConstants

class DatabaseConfig {
    companion object {
        fun initDB() {
            val config = HikariConfig()
            config.username = SecureConstants.database_username
            config.password = SecureConstants.database_password
            config.jdbcUrl = "jdbc:mysql://resentful.tk:3306/virtualPiano"
            config.driverClassName = com.mysql.cj.jdbc.Driver::class.qualifiedName
            val dataSource = HikariDataSource(config)
            Database.connect(dataSource)
        }
    }
}
