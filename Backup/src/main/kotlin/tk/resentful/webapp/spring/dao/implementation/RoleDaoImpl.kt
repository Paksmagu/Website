package tk.resentful.webapp.spring.dao.implementation

import org.springframework.stereotype.Repository
import tk.resentful.webapp.spring.dao.AbstractDaoImpl
import tk.resentful.webapp.spring.dao.interfaces.RoleDao
import tk.resentful.webapp.spring.entity.security.Role

@Repository
class RoleDaoImpl: AbstractDaoImpl<Role>(), RoleDao {

    override fun findByRoleName(roleName: String): Role {
        val query = sessionFactory.currentSession.createQuery("from ${clazz.name} where ROLE_NAME = :roleName ")
        query.setParameter("roleName", roleName)
        return query.uniqueResult() as Role
    }
}