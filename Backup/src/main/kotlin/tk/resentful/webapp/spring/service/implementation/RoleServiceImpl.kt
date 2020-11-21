package tk.resentful.webapp.spring.service.implementation

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import tk.resentful.webapp.spring.dao.interfaces.RoleDao
import tk.resentful.webapp.spring.entity.security.Role
import tk.resentful.webapp.spring.service.AbstractServiceImpl
import tk.resentful.webapp.spring.service.interfaces.RoleService

@Service
@Transactional
open class RoleServiceImpl: AbstractServiceImpl<Role>(), RoleService {

    @Autowired
    lateinit var roleDao: RoleDao

    override fun findByRoleName(roleName: String): Role {
        return roleDao.findByRoleName(roleName)
    }
}