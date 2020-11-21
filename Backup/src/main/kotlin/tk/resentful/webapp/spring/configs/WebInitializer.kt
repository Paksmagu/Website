package tk.resentful.webapp.spring.configs

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer

class WebInitializer: AbstractAnnotationConfigDispatcherServletInitializer() {
    override fun getRootConfigClasses(): Array<Class<*>>? {
        return arrayOf(RootConfig::class.java, WebSecurity::class.java)
    }

    override fun getServletMappings(): Array<String> {
        return arrayOf("/")
    }

    override fun getServletConfigClasses(): Array<Class<*>>? {
        return arrayOf(WebMvcConfig::class.java)
    }

}

