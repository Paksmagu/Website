package tk.resentful.webapp.spring.service.implementation

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import tk.resentful.webapp.spring.dao.interfaces.UserDao

@Service
@Transactional(readOnly = true)
open class UserDetailsServiceImpl : UserDetailsService {

    @Autowired
    lateinit var userDao: UserDao

    override fun loadUserByUsername(userName: String): UserDetails {
        val user = userDao.findByUsername(userName)
        if (user != null) {
        val grantedAuthorities = HashSet<GrantedAuthority>()
            user.roles.forEach {role -> grantedAuthorities.add(SimpleGrantedAuthority(role.name)) }
            return User(user.userName, user.password, grantedAuthorities)
        } else {
            throw UsernameNotFoundException("User not found with this username: $userName")
        }
    }
}