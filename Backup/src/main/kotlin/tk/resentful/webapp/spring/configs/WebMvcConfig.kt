package tk.resentful.webapp.spring.configs

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.view.InternalResourceViewResolver
import org.springframework.web.servlet.view.JstlView


@Configuration
@EnableWebMvc
@ComponentScan(basePackages = ["tk.resentful.webapp.spring"])
open class WebMvcConfig: WebMvcConfigurer {

    @Bean
    open fun resolver(): InternalResourceViewResolver? {
        val resolver = InternalResourceViewResolver()
        resolver.setViewClass(JstlView::class.java)
        resolver.setPrefix("/WEB-INF/views/")
        resolver.setSuffix(".jsp")
        resolver.setContentType("UTF-8")
        return resolver
    }

    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry
                .addResourceHandler("/resources/**", "/webjars/**")
                .addResourceLocations("/resources/","/webjars/")
                .resourceChain(false)

    }
}