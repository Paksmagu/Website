package tk.resentful.webapp.spring.service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import tk.resentful.webapp.spring.dao.AbstractDao
import java.io.Serializable

@Transactional
@Service
abstract class AbstractServiceImpl<T:Serializable> : AbstractService<T> {
    @Autowired
    lateinit var abstractDao: AbstractDao<T>

    override fun create(entity: T): T {
        return abstractDao.create(entity)
    }

    override fun delete(entity: T): Boolean {
        return abstractDao.delete(entity)
    }

    override fun deleteById(entityId: Long): Boolean {
        return abstractDao.deleteById(entityId)
    }

    @Transactional(readOnly = true)
    override fun findAll(): List<T> {
        return abstractDao.findAll()
    }

    @Transactional(readOnly = true)
    override fun findById(id: Long): T? {
        return abstractDao.findById(id)
    }

    override fun update(entity: T): T {
        return abstractDao.update(entity)
    }
}
