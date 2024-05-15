package com.campus_numerique.apero;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static java.time.LocalDateTime.now;

@Service
public class AperoService {


    private final ObtenirHeureService obtenirHeureService;

    public AperoService(ObtenirHeureService obtenirHeureService) {
        this.obtenirHeureService = obtenirHeureService;
    }

    public String estCeQueCestLheureDeLapero() {

        LocalDateTime now = obtenirHeureService.maintenant();

        if (now.getHour() >= 11 && now.getHour() < 13)
            return "Pastis !";

        return "Ne devrait pas arriver";
    }
}
