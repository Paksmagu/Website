package tk.resentful.webapp.spring.service.interfaces

import tk.resentful.webapp.spring.dbfunctions.UserFunctions
import tk.resentful.webapp.spring.entity.user.User
import tk.resentful.webapp.spring.service.AbstractService

interface UserService:AbstractService<User>, UserFunctions {
}