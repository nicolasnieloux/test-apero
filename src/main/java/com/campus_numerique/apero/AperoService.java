package com.campus_numerique.apero;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AperoService {


    private final ObtenirHeureService obtenirHeureService;

    public AperoService(ObtenirHeureService obtenirHeureService) {
        this.obtenirHeureService = obtenirHeureService;
    }

    public String estCeQueCestLheureDeLapero() {

        LocalDateTime now = obtenirHeureService.maintenant();

        if (now.getHour() >= 11 && now.getHour() < 13)
            return "Pastis ! :D";

        if (now.getHour() >= 17 || now.getHour() < 2)
            return "Soirée ! :P";

        return "C'est pas l'heure de l'apéro :'(";
    }
}
