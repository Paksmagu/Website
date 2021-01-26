package tk.resentful.webapp.spring.dao.interfaces

import tk.resentful.webapp.spring.dao.AbstractDao
import tk.resentful.webapp.spring.dbfunctions.UserFunctions
import tk.resentful.webapp.spring.entity.user.User

interface UserDao : AbstractDao<User>, UserFunctions {
}