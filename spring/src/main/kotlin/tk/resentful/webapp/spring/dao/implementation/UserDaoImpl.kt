package tk.resentful.webapp.spring.dao.implementation

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Repository
import tk.resentful.webapp.spring.dao.AbstractDaoImpl
import tk.resentful.webapp.spring.dao.interfaces.UserDao
import tk.resentful.webapp.spring.entity.user.User

@Repository
open class UserDaoImpl: AbstractDaoImpl<User>(), UserDao {

    override fun findByUsername(userName: String): User? {
        val query = sessionFactory.currentSession.createQuery("from ${clazz.name} where USER_NAME = :username ")
        query.setParameter("username", userName)
        val result = query.uniqueResult()
        return if (result == null) {
            null
        } else
            result as User
    }
}