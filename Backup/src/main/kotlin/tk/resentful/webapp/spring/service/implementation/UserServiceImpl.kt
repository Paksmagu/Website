package tk.resentful.webapp.spring.service.implementation

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import tk.resentful.webapp.spring.dao.interfaces.RoleDao
import tk.resentful.webapp.spring.dao.interfaces.UserDao
import tk.resentful.webapp.spring.entity.security.Role
import tk.resentful.webapp.spring.entity.user.User
import tk.resentful.webapp.spring.service.AbstractServiceImpl
import tk.resentful.webapp.spring.service.interfaces.UserService
import javax.transaction.Transactional

@Transactional
@Service
open class UserServiceImpl: AbstractServiceImpl<User>(), UserService {
    @Autowired
    lateinit var userDao: UserDao
    @Autowired
    lateinit var roleDao: RoleDao
    @Autowired
    lateinit var bCryptPasswordEncoder: BCryptPasswordEncoder

    override fun findByUsername(userName: String): User? {
        return userDao.findByUsername(userName)
    }

    override fun create(entity: User): User {
        entity.password = bCryptPasswordEncoder.encode(entity.password)
        val roleSet = HashSet<Role>()
        val allRoles = roleDao.findByRoleName("ROLE_USER")
        roleSet.add(allRoles)
        entity.roles = roleSet
        return super.create(entity)
    }

}