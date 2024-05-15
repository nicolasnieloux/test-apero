package com.campus_numerique.apero;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AperoController {

    private final AperoService aperoService;

    public AperoController(AperoService aperoService) {
        this.aperoService = aperoService;
    }

    @GetMapping("/est-ce-que-c-est-l-heure-de-l-apero")
    public String estCeQueCestLheureDeLapero() {
        return aperoService.estCeQueCestLheureDeLapero();
    }
}