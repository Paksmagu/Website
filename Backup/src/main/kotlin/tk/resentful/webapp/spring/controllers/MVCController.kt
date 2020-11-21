package tk.resentful.webapp.spring.controllers

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

@Controller
class MVCController {

    @GetMapping(value = ["/"])
    fun root(model: Model): String {
        return "/index"
    }
}