package com.campus_numerique.apero;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static java.time.LocalDateTime.now;

@Service
public class ObtenirHeureService {

    public LocalDateTime maintenant() {
        return now();
    }

}
