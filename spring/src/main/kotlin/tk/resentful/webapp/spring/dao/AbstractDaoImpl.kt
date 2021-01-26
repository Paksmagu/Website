package tk.resentful.webapp.spring.dao

import org.hibernate.SessionFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository

import java.io.Serializable
import java.lang.reflect.ParameterizedType
import javax.persistence.criteria.CriteriaBuilder

@Repository
abstract class AbstractDaoImpl<T : Serializable?> : AbstractDao<T> {
    var clazz: Class<T> = (javaClass.genericSuperclass as ParameterizedType).actualTypeArguments[0] as Class<T>

    @Autowired
    lateinit var sessionFactory: SessionFactory

    override fun findById(id: Long): T? {
        return sessionFactory.currentSession.get(clazz, id)
    }

    override fun findAll(): List<T> {
        val builder = sessionFactory.criteriaBuilder
        val query = builder.createQuery(clazz)
        val root = query.from(clazz)
        query.select(root)
        val q = sessionFactory.currentSession.createQuery(query)
        return q.resultList
    }

    override fun create(entity: T): T {
        sessionFactory.currentSession.saveOrUpdate(entity)
        return entity
    }

    override fun update(entity: T): T {
        sessionFactory.currentSession.merge(entity)
        return entity
    }

    override fun delete(entity: T): Boolean {
        sessionFactory.currentSession.delete(entity)
        return true
    }

    override fun deleteById(entityId: Long): Boolean {
        val entity = findById(entityId)
        return if (entity != null) {
            delete(entity)
        } else {
            false
        }
    }

}