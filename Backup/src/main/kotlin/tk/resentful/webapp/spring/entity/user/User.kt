package tk.resentful.webapp.spring.entity.user

import tk.resentful.webapp.spring.entity.security.Role
import java.io.Serializable
import javax.persistence.*

@Entity
@Table(name = "USERS", uniqueConstraints = [UniqueConstraint(name = "UK_USER_NAME", columnNames = ["USER_NAME"])])
class User(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "USER_ID")
        var id:Long = -1L,

        @Column(name = "PASSWORD")
        var password:String = "",

        @Column(name = "USER_NAME")
        var userName:String = "",

        @ManyToMany
        @JoinTable(name = "USER_ROLES",
                joinColumns = [JoinColumn(name = "USER_ID", foreignKey = ForeignKey(name = "FK_USER_ROLE_USER_ID"))],
                inverseJoinColumns = [JoinColumn(name = "ROLE_ID", foreignKey = ForeignKey(name = "FK_USER_ROLE_ROLE_ID"))])
        var roles:Set<Role> = setOf()
):Serializable