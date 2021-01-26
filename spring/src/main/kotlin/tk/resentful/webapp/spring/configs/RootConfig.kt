package tk.resentful.webapp.spring.configs

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.jdbc.datasource.DriverManagerDataSource
import org.springframework.orm.hibernate5.HibernateTransactionManager
import org.springframework.orm.hibernate5.LocalSessionFactoryBean
import org.springframework.transaction.annotation.EnableTransactionManagement
import tk.resentful.webapp.constants.Constants
import java.util.*
import javax.sql.DataSource


@Configuration
@EnableTransactionManagement
open class RootConfig {
    @Bean
    open fun sessionFactory(): LocalSessionFactoryBean {
        val sessionFactory = LocalSessionFactoryBean()
        sessionFactory.setDataSource(dataSource())
        sessionFactory.setPackagesToScan("tk.resentful.webapp.spring.entity")
        sessionFactory.hibernateProperties = hibernateProperties()
        return sessionFactory
    }

    private fun hibernateProperties(): Properties {
        val properties = Properties()
        properties["hibernate.dialect"] = "org.hibernate.dialect.MySQL57Dialect"
        properties["hibernate.show_sql"] = "true"
        properties["hibernate.format_sql"] = "true"
        properties["hibernate.hbm2ddl.auto"] = "create-drop"
        return properties
    }

    @Bean
    open fun dataSource(): DataSource {
        val dataSource = DriverManagerDataSource()
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver")
        dataSource.url = "jdbc:mysql://${Constants.Database.LOCAL_HOST}:3306/${Constants.Database.DB_DATABASE}"
        dataSource.username = Constants.Database.DB_USERNAME
        dataSource.password = Constants.Database.DB_PASSWORD
        return dataSource
    }

    @Bean
    open fun getTransactionManager(): HibernateTransactionManager {
        val transactionManager = HibernateTransactionManager()
        transactionManager.sessionFactory = sessionFactory().getObject()
        return transactionManager
    }
}