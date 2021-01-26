package tk.resentful.webapp.spring.entity.security

import tk.resentful.webapp.spring.entity.user.User
import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "ROLES", uniqueConstraints = [UniqueConstraint(name = "UK_ROLE_NAME", columnNames = ["ROLE_NAME"])])
class Role(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "ROLE_ID")
        var id: Long = -1L,

        @Column(name = "ROLE_NAME")
        var name: String = "",

        @ManyToMany(mappedBy = "roles")
        var users:Set<User> = setOf()

):Serializable {
}